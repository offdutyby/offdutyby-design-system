import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Tab from ".";
const meta: Meta<typeof Tab> = {
  title: "Components/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onClick: fn(),
  },
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Selected: Story = {
  args: { children: "계좌송금", isSelected: true },
};

Selected.decorators = [
  (Story) => (
    <div style={{ width: "171px", height: "42px" }}>
      <Story />
    </div>
  ),
];

export const Default: Story = {
  args: { children: "계좌송금", isSelected: false },
};

Default.decorators = [
  (Story) => (
    <div style={{ width: "171px", height: "42px" }}>
      <Story />
    </div>
  ),
];
