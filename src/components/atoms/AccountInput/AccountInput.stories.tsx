import type { Meta, StoryObj } from "@storybook/react";
import AccountInput from ".";
const meta: Meta<typeof AccountInput> = {
  title: "Components/AccountInput",
  component: AccountInput,
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
    title: "계좌번호",
    isClearButton: true,
    accountPlaceholder: "계좌번호를 적어주세요.",
    bankPlaceholder: "은행/증권사",
    description: "계좌번호만 입력해도 은행을 찾아드려요.",
  },
};

export const Error: Story = {
  args: {
    placeholder: "성함을 적어주세요.",
    title: "받는 분 내역 표시",
    errorText: "10자까지 입력할 수 있어요.",
  },
};
