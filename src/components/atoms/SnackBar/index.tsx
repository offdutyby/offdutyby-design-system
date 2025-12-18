import { useState, ReactNode } from "react";
import styles from "./index.module.scss";
import { SnackbarContext } from "@/components/atoms/SnackBar/SnackbarContext";

interface SnackbarProviderProps {
  children: ReactNode;
}

interface Message {
  id: string;
  message: string;
  type: string;
  duration: number;
}

const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
}: SnackbarProviderProps) => {
  const [snackbars, setSnackbars] = useState<Message[]>([]);

  const showSnackbar = (
    message: string,
    type: string,
    duration: number = 3000
  ): string => {
    const id = Math.random().toString(36).substring(2, 9);

    setSnackbars((prev) => [...prev, { id, message, type, duration }]);

    setTimeout(() => {
      setSnackbars((prev) => prev.filter((snackbar) => snackbar.id !== id));
    }, duration);

    return id;
  };

  const closeSnackbar = (id: string): void => {
    setSnackbars((prev) => prev.filter((snackbar) => snackbar.id !== id));
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar, closeSnackbar }}>
      {children}
      <div className={styles.container}>
        {snackbars.map(({ id, message, type }) => (
          <div key={id} className={`${styles.snackbar} ${styles[type] || ""}`}>
            <span className={styles.message}>{message}</span>
          </div>
        ))}
      </div>
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
