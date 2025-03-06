import type { Meta, StoryObj } from "@storybook/react";
import Divider from ".";

const meta: Meta<typeof Divider> = {
  title: "Componens/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "var(--stroke-tertiary)",
  },
};

Default.decorators = [
  (Story) => (
    <div style={{ width: "100px" }}>
      <Story />
    </div>
  ),
];

export const Vertical: Story = {
  args: {
    color: "var(--stroke-tertiary)",
    isVertical: true,
  },
};

Vertical.decorators = [
  (Story) => (
    <div
      style={{
        width: "100px",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Story />
    </div>
  ),
];

export const CustomColor: Story = {
  args: {
    color: "var(--stroke-primary)",
  },
};

CustomColor.decorators = [
  (Story) => (
    <div style={{ width: "100px" }}>
      <Story />
    </div>
  ),
];
