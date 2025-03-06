import styles from "./index.module.scss";
import clsx from "clsx";
import { forwardRef, HTMLAttributes, PropsWithChildren } from "react";

type DivElementProps = HTMLAttributes<HTMLDivElement> & PropsWithChildren;

interface TabProps extends DivElementProps {
  onClick?: () => void;
  isSelected?: boolean;
}

const Tab = forwardRef<HTMLDivElement, TabProps>(
  ({ className, isSelected, children, onClick, ...props }, ref) => {
    return (
      <div
        className={clsx(styles.container, className, {
          [styles.selected]: isSelected,
        })}
        onClick={onClick}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
Tab.displayName = "Tab";
export default Tab;
