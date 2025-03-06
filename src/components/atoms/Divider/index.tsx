import { forwardRef } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

interface DividerProps {
  className?: string;
  isVertical?: boolean;
  color?: string;
  width?: string;
}

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ className, isVertical = false, color, width = "100%" }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(styles.container, className)}
        style={{
          width: width,
          backgroundColor: color,
          transform: isVertical ? "rotate(90deg)" : "rotate(0deg)",
        }}
      ></div>
    );
  }
);

Divider.displayName = "Divider";

export default Divider;
