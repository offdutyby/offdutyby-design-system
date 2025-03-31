import clsx from "clsx";
import styles from "./index.module.scss";
import LoadingSpinner from "@/assets/icon/Spinner/Spinner.svg?react";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { getColor } from "@/styles/palette";

type ButtonElementProps = ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonType =
  | "primary"
  | "secondary"
  | "bottom_sheet"
  | "small_primary"
  | "small_secondary";

export interface ButtonProps
  extends Omit<ButtonElementProps, "prefix" | "type"> {
  type?: ButtonType;
  width?: number | string;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  htmlType?: ButtonElementProps["type"];
  prefix?: ReactNode;
  icon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      style,
      type = "primary",
      width,
      fullWidth = false,
      disabled = false,
      loading = false,
      children,
      prefix,
      htmlType = "button",
      ...rest
    }: ButtonProps,
    ref
  ) => {
    const isDisabledOrLoading = disabled || loading;
    const isSmallType = type === "small_primary" || type === "small_secondary";

    return (
      <button
        className={clsx(
          styles.container,
          {
            [styles[`type-${type}`]]: type,
            [styles.fullWidth]: fullWidth,
            [styles.disabled]: disabled,
            [styles.prefix]: prefix,
          },
          className
        )}
        disabled={isDisabledOrLoading}
        aria-disabled={isDisabledOrLoading}
        style={{ width, ...style }}
        type={htmlType}
        ref={ref}
        {...rest}
      >
        {prefix && prefix}
        <div className={clsx({ [styles.loading]: loading })}>
          {loading ? (
            <span className={styles.spinner}>
              <LoadingSpinner
                width={isSmallType ? 15 : 35}
                height={isSmallType ? 15 : 35}
                fill={getColor("var(--tertiary-50)")}
              />
            </span>
          ) : (
            <span className={styles.text}>{children}</span>
          )}
        </div>
      </button>
    );
  }
);

export default Button;
