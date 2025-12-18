import {
  SnackbarContext,
  SnackbarContextType,
} from "@/components/atoms/SnackBar/SnackbarContext";
import { useContext } from "react";

export const useSnackbar = (): SnackbarContextType => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};
