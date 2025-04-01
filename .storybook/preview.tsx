import type { Preview } from "@storybook/react";
import SnackbarProvider from "../src/components/atoms/SnackBar/index";
import FormWrapper from "../src/hooks/FormWrapper";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <SnackbarProvider>
        <FormWrapper defaultValues="">
          <Story />
        </FormWrapper>
      </SnackbarProvider>
    ),
  ],
};

export default preview;
