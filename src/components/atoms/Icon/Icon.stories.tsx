import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Icon from ".";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
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

Logo.decorators = [
  (Story) => (
    <div
      style={{
        width: "500px",
        height: "500px",
        backgroundColor: "beige",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Story />
    </div>
  ),
];
