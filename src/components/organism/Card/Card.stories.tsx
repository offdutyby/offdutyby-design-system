import type { Meta, StoryObj } from "@storybook/react";
import Card from ".";
const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
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
  args: {},
};

Primary.decorators = [
  (Story) => (
    <div
      style={{
        width: "700px",
        height: "500px",
        backgroundColor: "#F8F8F8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "358px" }}>
        <Story />
      </div>
    </div>
  ),
];
