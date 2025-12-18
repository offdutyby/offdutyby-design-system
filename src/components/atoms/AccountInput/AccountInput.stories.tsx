import type { Meta, StoryObj } from "@storybook/react";
import ExAccountInput from "./ExAccountInput.tsx";
const meta: Meta<typeof ExAccountInput> = {
  title: "Components/AccountInput",
  component: ExAccountInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "계좌번호",
    accountPlaceholder: "계좌를 입력해주세요.",
    bankPlaceholder: "은행/증권사",
    description: "계좌번호만 입력해도 은행을 찾아드려요.",
  },
};
