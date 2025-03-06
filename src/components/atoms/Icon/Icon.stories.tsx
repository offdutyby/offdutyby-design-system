import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Icon from ".";

const meta: Meta<typeof Icon> = {
  title: "Componens/Icon",
  component: Icon,
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

export const Logo: Story = {
  args: {
    name: "logo-kakaopay",
  },
};
