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
    description: "받는 분의 성함을 적어주세요.",
    // errorText: "10자까지 입력할 수 있어요.",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "성함을 적어주세요.",
    title: "받는 분 내역 표시",
    description: "받는 분의 성함을 적어주세요.",
    isClearButton: true,
  },
};

export const Error: Story = {
  args: {
    placeholder: "성함을 적어주세요.",
    title: "받는 분 내역 표시",
    errorText: "10자까지 입력할 수 있어요.",
  },
};
