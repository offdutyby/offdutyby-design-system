import styles from "./index.module.scss";
import clsx from "clsx";
import { forwardRef, HTMLAttributes } from "react";

type DivElementProps = HTMLAttributes<HTMLDivElement>;

interface TabsProps extends DivElementProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ className, children, width, height, ...props }, ref) => {
    return (
      <div
        className={clsx(styles.container, className)}
        style={{ width, height }}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
Tabs.displayName = "Tabs";
export default Tabs;
