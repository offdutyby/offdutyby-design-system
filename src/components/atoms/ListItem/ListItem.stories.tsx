import type { Meta, StoryObj } from "@storybook/react";
import ListItem from ".";
const meta: Meta<typeof ListItem> = {
  title: "Components/ListItem",
  component: ListItem,
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
    left_title: "스터디 카페",
    left_description: "10.26 - 10.31",
    right_title: "3000원",
    right_description: "결제할인",
    iconName: "illustration_icon-paper",
  },
};

Primary.decorators = [
  (Story) => (
    <div style={{ width: "280px" }}>
      <Story />
    </div>
  ),
];
