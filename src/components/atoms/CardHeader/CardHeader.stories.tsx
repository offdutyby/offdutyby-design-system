import type { Meta, StoryObj } from "@storybook/react";
import CardHeader from ".";
const meta: Meta<typeof CardHeader> = {
  title: "Components/CardHeader",
  component: CardHeader,
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
    title: "신용점수",
    description: "17분 전",
  },
};

Primary.decorators = [
  (Story) => (
    <div style={{ width: "300px" }}>
      <Story />
    </div>
  ),
];
