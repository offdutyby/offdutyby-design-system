import fs from "fs-extra";
import path from "path";
import { optimize, Config } from "svgo";

//
const svgoConfig: Config = {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
          removeTitle: false,
          cleanupIds: false,
          removeUnknownsAndDefaults: false,
          removeUselessDefs: false,
          removeHiddenElems: false,
          removeEmptyContainers: false,
          mergePaths: false,
          convertShapeToPath: false,
          collapseGroups: false,
        },
      },
    },

    {
      name: "convertPathData",
      params: {
        noSpaceAfterFlags: false,
      },
    },
  ],
};

async function findSvgFiles(dir: string): Promise<string[]> {
  const files = await fs.readdir(dir);
  const svgFiles: string[] = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory()) {
      const nestedSvgFiles = await findSvgFiles(filePath);
      svgFiles.push(...nestedSvgFiles);
    } else if (file.endsWith(".svg")) {
      svgFiles.push(filePath);
    }
  }

  return svgFiles;
}

async function generateSvgSprite() {
  try {
    const inputDir = path.resolve(process.cwd(), "public/assets/icon");
    const outputDir = path.resolve(process.cwd(), "public/assets/sprite");
    const outputFile = path.join(outputDir, "sprite.svg");

    await fs.ensureDir(outputDir);

    const svgFilePaths = await findSvgFiles(inputDir);

    if (svgFilePaths.length === 0) {
      console.log("❌ SVG 파일을 찾을 수 없습니다.");
      return;
    }

    let spriteContent =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';

    //
    const groupedFiles = svgFilePaths.reduce((acc, filePath) => {
      const relativePath = path.relative(inputDir, filePath);
      const folderPath = path.dirname(relativePath);
      if (!acc[folderPath]) {
        acc[folderPath] = [];
      }
      acc[folderPath].push(filePath);
      return acc;
    }, {} as Record<string, string[]>);

    for (const [folder, files] of Object.entries(groupedFiles)) {
      const prefix = folder.replace(/[\\/]/g, "-");

      for (const filePath of files) {
        const fileName = path.basename(filePath, ".svg");

        const iconName =
          folder === "bank_symbol"
            ? `bank-symbol-${fileName}`
            : folder === "bank"
            ? `bank-${fileName}`
            : `${prefix}-${fileName}`;

        console.log(`처리 중: ${iconName}`);

        const content = await fs.readFile(filePath, "utf8");

        const optimizedSvg = optimize(content, svgoConfig);

        const viewBoxMatch = optimizedSvg.data.match(/viewBox="([^"]+)"/);
        const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";

        const symbolContent = optimizedSvg.data
          .replace(
            /<svg[^>]*>/,
            `<symbol id="icon-${iconName}" viewBox="${viewBox}">`
          )
          .replace("</svg>", "</symbol>");

        spriteContent += symbolContent;
      }
    }

    spriteContent += "</svg>";

    await fs.writeFile(outputFile, spriteContent, "utf8");

    console.log(`✨ SVG 스프라이트가 생성되었습니다: ${outputFile}`);

    const iconNames = svgFilePaths
      .map((filePath) => {
        const relativePath = path.relative(inputDir, filePath);
        const folder = path.dirname(relativePath);
        const fileName = path.basename(filePath, ".svg");

        const iconName =
          folder === "bank_symbol"
            ? `bank-symbol-${fileName}`
            : folder === "bank"
            ? `bank-${fileName}`
            : `${folder.replace(/[\\/]/g, "-")}-${fileName}`;

        return `'${iconName}'`;
      })
      .join(" | ");

    const typeContent = `export type IconName = ${iconNames};`;
    await fs.writeFile(
      path.resolve(process.cwd(), "src/types/icon.ts"),
      typeContent,
      "utf8"
    );

    console.log("✨ 아이콘 타입 정의가 생성되었습니다.");
  } catch (error) {
    console.error("❌ SVG 스프라이트 생성 중 오류 발생:", error);
    process.exit(1);
  }
}

generateSvgSprite();
