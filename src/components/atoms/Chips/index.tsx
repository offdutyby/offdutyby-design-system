import styles from "./index.module.scss";
import clsx from "clsx";
import { forwardRef, PropsWithChildren, ReactNode } from "react";

interface ChipsProps extends PropsWithChildren {
  className?: string;
  width?: string;
  height?: string;
  padding?: string;
  fontSize?: string;
  color?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  radius?: string;
  /**
   * @description 채워진 상태로 outlineGray 속성과 함께 사용할 수 없습니다.
   */
  fillGray?: boolean;
  /**
   * @description outline만 표시되는 상태로 fillGray 속성과 함께 사용할 수 없습니다.
   */
  outlineGray?: boolean;
  onClick?: () => void;
}

const Chips = forwardRef<HTMLDivElement, ChipsProps>(
  (
    {
      className,
      width,
      height,
      padding,
      fontSize,
      prefix,
      suffix,
      fillGray = true,
      outlineGray = false,
      radius = "100px",
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={clsx(styles.container, className, {
          [styles.fillGray]: fillGray,
          [styles.outlineGray]: outlineGray,
        })}
        style={{ width, height, padding, fontSize, borderRadius: radius }}
        onClick={onClick}
        {...props}
        ref={ref}
      >
        {prefix && prefix}
        <p>{children}</p>
        {suffix && suffix}
      </div>
    );
  }
);
Chips.displayName = "Chips";
export default Chips;
