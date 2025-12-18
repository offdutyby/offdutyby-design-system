import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";
const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    placeholder: "성함을 적어주세요.",
    title: "받는 분 내역 표시",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "이름",
    placeholder: "성함을 적어주세요.",
  },
};

export const OnError: Story = {
  args: {
    placeholder: "성함을 적어주세요.",
    isError: true,
    errorMessage: "이슈가 발생했습니다.",
    description: "한글로 입력이 가능합니다",
  },
};

export const OnDescription: Story = {
  args: {
    placeholder: "성함을 적어주세요.",
    description: "한글로 입력이 가능합니다",
  },
};
