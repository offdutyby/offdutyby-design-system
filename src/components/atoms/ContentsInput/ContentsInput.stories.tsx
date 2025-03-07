import type { Meta, StoryObj } from "@storybook/react";
import ContentsInput from ".";
const meta: Meta<typeof ContentsInput> = {
  title: "Components/ContentsInput",
  component: ContentsInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    placeholder: "얼마를 보낼까요?",
    description: "잔액 13,600원 / 부족금액 자동 충전",
  },
};
