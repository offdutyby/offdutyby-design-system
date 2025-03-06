import type { Meta, StoryObj } from "@storybook/react"; // Storybook에서 Meta와 StoryObj 타입을 가져옴
import { fn } from "@storybook/test"; // Storybook 테스트 유틸리티에서 fn을 가져옴
import Button from "."; // Button 컴포넌트를 가져옴

// 스토리 설정에 대한 기본 내보내기
const meta: Meta<typeof Button> = {
  title: "Components/Button", // Storybook에서 컴포넌트가 표시될 경로
  component: Button, // 스토리에서 사용할 컴포넌트
  parameters: {
    // 캔버스에서 컴포넌트를 중앙에 배치하는 선택적 매개변수
    layout: "centered",
  },
  // 이 컴포넌트는 자동으로 생성된 Autodocs 항목을 가짐
  tags: ["autodocs"],
  // argTypes를 통해 스토리의 인수를 제어
  argTypes: {
    color: { control: "color" }, // 배경색을 제어할 수 있는 색상 선택기 추가
  },
  // onClick 인수를 감시하기 위해 fn을 사용, 호출되면 actions 패널에 나타남
  args: { onClick: fn() },
};

export default meta; // 스토리 설정을 기본 내보내기로 내보냄
type Story = StoryObj<typeof meta>; // 스토리 타입 정의

// 스토리를 작성하는 방법에 대한 추가 정보
export const Primary: Story = {
  args: {
    type: "primary", // 기본 버튼 스타일을 사용
    children: "확인", // 버튼에 표시될 텍스트
    disabled: false, // 비활성화 여부 설정
    state: "default", // 버튼 상태 설정
    fullWidth: true,
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary", // 기본 버튼 스타일을 사용
    children: "취소", // 버튼에 표시될 텍스트
    disabled: false, // 비활성화 여부 설정
    state: "default", // 버튼 상태 설정
  },
};

export const BottomSheet: Story = {
  args: {
    type: "bottom_sheet", // 기본 버튼 스타일을 사용
    children: "확인", // 버튼에 표시될 텍스트
    disabled: false, // 비활성화 여부 설정
    state: "default", // 버튼 상태 설정
  },
};

export const Small: Story = {
  args: {
    type: "small_primary", // 작은 크기의 버튼
    children: "송금", // 버튼에 표시될 텍스트
    disabled: false, // 비활성화 여부 설정
    state: "default", // 버튼 상태 설정
  },
};
