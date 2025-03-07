import type { Meta, StoryObj } from "@storybook/react";
import PagenationDots from ".";
import { useState } from "react";
const meta: Meta<typeof PagenationDots> = {
  title: "Components/PagenationDots",
  component: PagenationDots,
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
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <PagenationDots
        {...args}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    );
  },
  args: {
    totalPages: 20,
    currentPage: 1,
    onPageChange: (page) => {
      console.log(page);
    },
  },
};
