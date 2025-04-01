import type { Meta, StoryObj } from "@storybook/react";
import ExUserInfoInput from "./ExUserInfoInput.tsx";

const meta: Meta<typeof ExUserInfoInput> = {
  title: "Components/UserInfoInput",
  component: ExUserInfoInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    placeholder: "성함을 적어주세요.",
    title: "받는 분 내역 표시",
    description: "받는 분의 성함을 적어주세요.",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "성함을 적어주세요.",
    title: "받는 분 내역 표시",
    description: "받는 분의 성함을 적어주세요.",
  },
};
