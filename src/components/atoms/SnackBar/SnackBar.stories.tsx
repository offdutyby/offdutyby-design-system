import type { Meta, StoryObj } from "@storybook/react";
import { SnackbarProvider } from ".";
import { useSnackbar } from "@/hooks/useSnackbar";
import Button from "@/components/atoms/Button";

const Test = () => {
  const { showSnackbar } = useSnackbar();
  return (
    <div
      style={{
        width: "390px",
        height: "844px",
        backgroundColor: "white",
        border: "1px solid grey",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ position: "fixed", bottom: "20px" }}>
          <Button
            onClick={() =>
              showSnackbar("송금이 완료되었습니다.", "success", 3000)
            }
          >
            송금
          </Button>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof SnackbarProvider> = {
  title: "Components/Snackbar",
  component: SnackbarProvider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <Test />,
  },
};

Primary.decorators = [
  (Story) => {
    return <Story />;
  },
];
