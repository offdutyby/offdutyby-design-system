import type { Meta, StoryObj } from "@storybook/react";
import Tabs from ".";
import Tab from "@/components/atoms/Tab";
import { useState } from "react";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const TwoTabs: Story = {
  args: {},
};

TwoTabs.decorators = [
  () => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
      <div>
        <Tabs width="390px" height="42px">
          <Tab isSelected={selectedTab === 0} onClick={() => setSelectedTab(0)}>
            계좌송금
          </Tab>
          <Tab isSelected={selectedTab === 1} onClick={() => setSelectedTab(1)}>
            통장입금
          </Tab>
        </Tabs>
      </div>
    );
  },
];
