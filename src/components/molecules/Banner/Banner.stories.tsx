import type { Meta, StoryObj } from "@storybook/react";
import Banner from ".";

const meta: Meta<typeof Banner> = {
  title: "Components/Banner",
  component: Banner,
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
    title: "새로운 소식 아직 안 봤다면",
    description: "열어만 봐도 30P",
    iconName: "illustration_icon-coin",
  },
};

Primary.decorators = [
  (Story) => (
    <div style={{ width: "358px" }}>
      <Story />
    </div>
  ),
];
