import React from "react";

export type SnackbarType = "default" | "success" | "error" | "info" | "warning";

export interface Snackbar {
  id: string;
  message: string;
  type: string;
  duration: number;
}

export interface SnackbarContextType {
  showSnackbar: (message: string, type: string, duration?: number) => string;
  closeSnackbar: (id: string) => void;
}

export const SnackbarContext = React.createContext<SnackbarContextType | null>(
  null
);
