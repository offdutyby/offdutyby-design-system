import type { Meta, StoryObj } from "@storybook/react";
import PaginationDots from ".";
import { useState } from "react";

const meta: Meta<typeof PaginationDots> = {
  title: "Components/PaginationDots",
  component: PaginationDots,
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
      <PaginationDots
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
