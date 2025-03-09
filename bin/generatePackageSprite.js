// 대상 디렉토리 및 파일 경로
const targetDir = path.join(projectRoot, "public/assets");
const targetFile = path.join(targetDir, "sprite.svg");

// 메인 함수
async function installSprite() {
  console.log("🚀 Off Design System 스프라이트 파일 설치 중...");

  try {
    // 소스 파일 존재 확인
    if (!fs.existsSync(sourceFile)) {
      throw new Error(`소스 파일을 찾을 수 없습니다: ${sourceFile}`);
    }

    // 대상 디렉토리 생성 (없는 경우)
    if (!fs.existsSync(targetDir)) {
      console.log(`📁 디렉토리 생성 중: ${targetDir}`);
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // 파일 복사
    console.log(`📋 스프라이트 파일 복사 중...`);
    fs.copyFileSync(sourceFile, targetFile);

    console.log(`✅ 설치 완료: ${targetFile}`);
    console.log("");
    console.log("Icon 컴포넌트를 사용할 준비가 되었습니다!");
    console.log('예시: <Icon name="home" />');
  } catch (error) {
    console.error("❌ 설치 실패:", error.message);
    process.exit(1);
  }
}

// 스크립트 실행
installSprite();
