import type { Meta, StoryObj } from "@storybook/react";
import ExCurrencyInput from "./ExCurrencyInput.tsx";
const meta: Meta<typeof ExCurrencyInput> = {
  title: "Components/CurrencyInput",
  component: ExCurrencyInput,
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
    description: "잔액 13,600원 / 부족금액 자동 충전",
    placeholder: "얼마를 보낼까요?",
  },
};
