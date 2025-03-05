import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

type ButtonElementProps = ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonType =
  | "primary"
  | "secondary"
  | "bottom_sheet"
  | "small_primary"
  | "small_secondary";
type ButtonState = "default" | "pressed" | "loading" | "disabled";

export interface ButtonProps
  extends Omit<ButtonElementProps, "prefix" | "type"> {
  type?: ButtonType;
  state?: ButtonState;
  width?: number | string;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  htmlType?: ButtonElementProps["type"];
  /**
   * @description Button 왼쪽에 Icon 컴포넌트를 넣을 수 있습니다. (ex. <Icon icon={"default/add"} color={"grey20"} size={20} />
   */
  prefix?: ReactNode;
  /**
   * @description Icon은 prefix와 함께 사용할 수 없습니다.
   */
  icon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      style,
      type = "primary",
      color = "default",
      width,
      fullWidth = false,
      disabled = false,
      loading = false,
      children,
      prefix,
      icon,
      htmlType = "button",
      ...rest
    }: ButtonProps,
    ref
  ) => {
    const isDisabledOrLoading = disabled || loading;
    return (
      <button
        className={clsx(
          styles.container,
          {
            [styles[`type-${type}`]]: type,
            [styles[`color-${color}`]]: color,
            [styles.fullWidth]: fullWidth,
            [styles.disabled]: disabled,
            [styles.prefix]: prefix,
            [styles.iconOnly]: icon && !children,
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
        {icon ? (
          <>
            {/* {loading && <Spinner />} */}
            {!loading && icon}
          </>
        ) : (
          <>
            {prefix && (
              <>
                {/* {loading && <Spinner />} */}
                {!loading && prefix}
              </>
            )}
            <div className={clsx({ [styles.loading]: loading && !prefix })}>
              {loading && !prefix && (
                <span className={styles.spinner}>{/* <Spinner /> */}</span>
              )}
              <span className={styles.text}>{children}</span>
            </div>
          </>
        )}
      </button>
    );
  }
);

export default Button;
