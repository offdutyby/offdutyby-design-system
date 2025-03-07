import styles from "./index.module.scss";
import clsx from "clsx";
import { forwardRef, HTMLAttributes, useState } from "react";
type InputElementProps = HTMLAttributes<HTMLInputElement>;
interface Props extends InputElementProps {
  description?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorText?: string;
  helperText?: string;
}
const ContentsInput = forwardRef<HTMLInputElement, Props>(
  ({ className, description, ...props }, ref) => {
    const [value, setValue] = useState<number | string>("");

    const priceChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      const price = event.target.value;
      const commaPrice = Number(price.replaceAll(",", "")) as number;
      if (isNaN(commaPrice)) {
        setValue("");
      } else {
        setValue(commaPrice.toLocaleString("ko-KR"));
      }
    };

    return (
      <>
        <input
          className={clsx(styles.container, className)}
          {...props}
          ref={ref}
          type="text"
          value={value}
          onChange={(e) => priceChangeHandler(e)}
        />
        <div className={styles.description}>{description}</div>
      </>
    );
  }
);
ContentsInput.displayName = "ContentsInput";
export default ContentsInput;
