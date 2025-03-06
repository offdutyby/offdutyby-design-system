import fs from "fs-extra";
import path from "path";
import { optimize, Config } from "svgo";

// SVG 최적화를 위한 설정
const svgoConfig: Config = {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
          removeTitle: false,
          // ID 충돌 방지를 위해 cleanupIds 비활성화
          cleanupIds: false,
          // 모든 속성 보존
          removeUnknownsAndDefaults: false,
          // 패턴과 이미지 관련 요소 보존
          removeUselessDefs: false,
          removeHiddenElems: false,
          removeEmptyContainers: false,
          // 배경 관련 요소 보존
          mergePaths: false,
          convertShapeToPath: false,
          collapseGroups: false,
        },
      },
    },
    // base64 이미지 데이터 보존
    {
      name: "convertPathData",
      params: {
        noSpaceAfterFlags: false,
      },
    },
  ],
};

// 재귀적으로 SVG 파일 찾기
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

// SVG 스프라이트 생성 함수
async function generateSvgSprite() {
  try {
    // 입력 및 출력 디렉토리 설정
    const inputDir = path.resolve(process.cwd(), "src/assets/icon");
    const outputDir = path.resolve(process.cwd(), "src/assets/sprite");
    const outputFile = path.join(outputDir, "sprite.svg");

    // 출력 디렉토리가 없으면 생성
    await fs.ensureDir(outputDir);

    // SVG 파일 목록 가져오기 (재귀적으로)
    const svgFilePaths = await findSvgFiles(inputDir);

    if (svgFilePaths.length === 0) {
      console.log("❌ SVG 파일을 찾을 수 없습니다.");
      return;
    }

    // 스프라이트 시작 태그 (xmlns:xlink 추가)
    let spriteContent =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';

    // 파일 경로를 폴더별로 그룹화
    const groupedFiles = svgFilePaths.reduce((acc, filePath) => {
      const relativePath = path.relative(inputDir, filePath);
      const folderPath = path.dirname(relativePath);
      if (!acc[folderPath]) {
        acc[folderPath] = [];
      }
      acc[folderPath].push(filePath);
      return acc;
    }, {} as Record<string, string[]>);

    // 폴더별로 처리
    for (const [folder, files] of Object.entries(groupedFiles)) {
      // 폴더 이름을 prefix로 사용
      const prefix = folder.replace(/[\\/]/g, "-");

      for (const filePath of files) {
        const fileName = path.basename(filePath, ".svg");
        // bank_symbol, bank 폴더의 경우 특별 처리(image file 충돌)
        const iconName =
          folder === "bank_symbol"
            ? `bank-symbol-${fileName}`
            : folder === "bank"
            ? `bank-${fileName}`
            : `${prefix}-${fileName}`;

        console.log(`처리 중: ${iconName}`);

        // SVG 파일 읽기
        const content = await fs.readFile(filePath, "utf8");

        // SVG 최적화
        const optimizedSvg = optimize(content, svgoConfig);

        // viewBox 추출
        const viewBoxMatch = optimizedSvg.data.match(/viewBox="([^"]+)"/);
        const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";

        // symbol 태그로 변환 (기존 ID 유지)
        const symbolContent = optimizedSvg.data
          .replace(
            /<svg[^>]*>/,
            `<symbol id="icon-${iconName}" viewBox="${viewBox}">`
          )
          .replace("</svg>", "</symbol>");

        spriteContent += symbolContent;
      }
    }

    // 스프라이트 종료 태그
    spriteContent += "</svg>";

    // 스프라이트 파일 저장
    await fs.writeFile(outputFile, spriteContent, "utf8");

    console.log(`✨ SVG 스프라이트가 생성되었습니다: ${outputFile}`);

    // 타입 정의 파일 생성 - 폴더 구조 반영
    const iconNames = svgFilePaths
      .map((filePath) => {
        const relativePath = path.relative(inputDir, filePath);
        const folder = path.dirname(relativePath);
        const fileName = path.basename(filePath, ".svg");

        // bank_symbol과 bank 폴더 특별 처리
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

// 스크립트 실행
generateSvgSprite();
