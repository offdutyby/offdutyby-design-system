// useSnackbar.ts
import {
  SnackbarContext,
  SnackbarContextType,
} from "@/components/atoms/SnackBar/SnackbarContext";
import { useContext } from "react";

// 커스텀 훅으로 스낵바 사용
export const useSnackbar = (): SnackbarContextType => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};
