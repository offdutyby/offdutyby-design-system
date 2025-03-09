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

// 스낵바 프로바이더 컴포넌트
const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
}: SnackbarProviderProps) => {
  const [snackbars, setSnackbars] = useState<Message[]>([]);

  // 스낵바 추가 함수
  const showSnackbar = (
    message: string,
    type: string,
    duration: number = 3000
  ): string => {
    const id = Math.random().toString(36).substring(2, 9);

    // 새 스낵바 추가
    setSnackbars((prev) => [...prev, { id, message, type, duration }]);

    // 지정된 시간 후 스낵바 제거
    setTimeout(() => {
      setSnackbars((prev) => prev.filter((snackbar) => snackbar.id !== id));
    }, duration);

    return id;
  };

  // 스낵바 제거 함수
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
            {/* <button
              className={styles.closeButton}
              onClick={() => closeSnackbar(id)}
            >
              ×
            </button> */}
          </div>
        ))}
      </div>
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
