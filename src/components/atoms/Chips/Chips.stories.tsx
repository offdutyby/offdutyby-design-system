import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Chips from ".";
import Icon from "@/components/atoms/Icon";
const meta: Meta<typeof Chips> = {
  title: "Components/Chips",
  component: Chips,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Chips",
    onClick: fn(),
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const FillGray: Story = {
  args: {},
};

FillGray.decorators = [
  () => {
    return (
      <Chips width="78px" height="30px" fillGray>
        +10만
      </Chips>
    );
  },
];

export const OutlineGray: Story = {
  args: {},
};

OutlineGray.decorators = [
  () => {
    return (
      <Chips
        padding="8px 12px"
        outlineGray
        prefix={
          <Icon name="illustration_icon-calculate" width="22px" height="22px" />
        }
        suffix={<Icon name="app-cancel_20" width="14px" height="14px" />}
      >
        정산해요
      </Chips>
    );
  },
];

export const FillGraySurfix: Story = {
  args: {},
};

FillGraySurfix.decorators = [
  () => {
    return (
      <Chips
        fillGray
        padding="5px 10px 5px 5px"
        prefix={<Icon name="bank-kookmin" width="16px" height="16px" />}
        radius="8px"
      >
        국민 2342717585552
      </Chips>
    );
  },
];
