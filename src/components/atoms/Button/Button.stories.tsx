import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    color: { control: "color" },
  },

  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
    children: "확인",
    disabled: false,
    fullWidth: true,
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    children: "취소",
    disabled: false,
  },
};

export const BottomSheet: Story = {
  args: {
    type: "bottom_sheet",
    children: "확인",
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    type: "small_primary",
    children: "송금",
    disabled: false,
  },
};
