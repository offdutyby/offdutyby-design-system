import type { Meta, StoryObj } from "@storybook/react";
import Card from ".";
import ListItem from "@/components/atoms/ListItem";
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
  args: {
    header: {
      title: "혜택받기",
      description: "17분 전",
    },
    slider: {
      totalSlide: 2,
      slideWidth: 358,
      slides: [
        <ListItem
          left_title="홈플러스"
          left_description="10.06 - 10.12"
          right_title="3000원"
          right_description="청구결제"
          iconName="illustration_icon-coin"
        />,
        <ListItem
          left_title="홈플러스"
          left_description="10.06 - 10.12"
          right_title="3000원"
          right_description="청구결제"
          iconName="illustration_icon-coin"
        />,
      ],
    },
  },
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
