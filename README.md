# Design System Project (ref. kakao pay)

- 해당 레포지토리는 포트폴리오를 위한 프로젝트로 연습용 프로젝트임을 알려드립니다.
- POC를 시작으로 지속적인 업데이트와 확장성을 기대합니다.

## Project Goal

- Deploy Pipeline 경험
- 재사용 가능한 Component에 대한 깊은 이해
- Component 설계 & 더 좋은 설계를 위한 리팩토링 경험
- 빌드 최적화를 위한 번들러 세팅 경험
- script를 통한 자동화 로직 기획 및 구현

## Plan

- ver 0.0.x
  - POC 과정으로 재사용 가능한 컴포넌트를 구현합니다.
  - 오류나 버그가 있을 가능성이 있고, 종종 하드코딩의 케이스가 있습니다.
  - 비즈니스 로직이 적용 전이고 스토리북을 통해서 useage를 세팅합니다.
  - 기본적인 boilerplate 및 배포 파이프라인을 개발합니다.
  - 2주 정도의 짧은 리소스로 코드 퀄리티나 최적화 보다는 빠른 구현을 실행합니다.
  - 기본적인 Github action으로 CI/CD 구축(최소한의 빌드 테스트만 구현)
- ver 0.1.0
  - Test Code 세팅
  - 배포 파이프라인 최적화 및 테스트 과정 추가
  - 사용하는 과정에서 오류나 버그가 없도록 기능 QA 및 리팩토링 진행
  - 재사용성이 확실한 로직들 리팩토링
  - 의존성 재확인 및 최적화
    - README 혹은 Storybook 사용 방법에 대한 고지 필수
- ver 1.0.0
  - 사용가능한 컴포넌트 추가
  - DX를 고려한 Style Provider, Icon Provider 등 개발
  - 추가적인 QA 및 테스트 코드 강화
    - vitest 적용

## Usage

- Install : `npm i offduty-design-system.git`
- Test Useage
  ```
  import { Icon, Banner } from 'offdutyby-design-system.git'

  const Test = () => {
    return (
      <div style={{ width: '500px', height: '500px' }}>

        <Icon name="bank-kakaobank" width={100} height={100} />

        <div>
          <Banner title="안녕하세요" description="안녕하세요" iconName="bank-kakaobank" />
        </div>
      </div>
    )
  }

  export default Test

  ```
- 각 컴포넌트의 자세한 useage는 Storybook에 작업 순서대로 추가할 예정입니다. [Storybook Link](https://67cd369b3567adf047d73172-rppnpefwuc.chromatic.com/)
