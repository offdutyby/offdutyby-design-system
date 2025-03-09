import type { Meta, StoryObj } from "@storybook/react";
import Slider from ".";
import Banner from "@/components/molecules/Banner";
const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
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
    totalSlide: 4,
    slideWidth: 358,
    paginationDotsPosition: {
      top: "4px",
      right: "20px",
    },
    slides: [
      <Banner
        key={0}
        title="새로운 소식 아직 안 봤다면"
        description="열어만 봐도 30P"
        iconName="illustration_icon-coin"
      />,
      <Banner
        key={1}
        title="새로운 소식 아직 안 봤다면"
        description="열어만 봐도 30P"
        iconName="illustration_icon-coin"
      />,
      <Banner
        key={2}
        title="새로운 소식 아직 안 봤다면"
        description="열어만 봐도 30P"
        iconName="illustration_icon-coin"
      />,
      <Banner
        key={2}
        title="새로운 소식 아직 안 봤다면"
        description="열어만 봐도 30P"
        iconName="illustration_icon-coin"
      />,
    ],
  },
};

Primary.decorators = [(Story) => <Story />];
