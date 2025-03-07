import Icon from "@/components/atoms/Icon";
import styles from "./index.module.scss";
import clsx from "clsx";
import { forwardRef, HTMLAttributes, useState } from "react";

type InputElementProps = HTMLAttributes<HTMLInputElement>;
interface InputProps extends InputElementProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  errorText?: string;
  helperText?: string;
  disabled?: boolean;
  readOnly?: boolean;
  type?: string;
  title?: string;
  description?: string;
  isClearButton?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [text, setText] = useState("");
    return (
      <>
        {props.title && <p className={styles.title}>{props.title}</p>}
        <div className={styles.inputContainer}>
          <input
            className={clsx(
              props.errorText && styles.error,
              styles.container,
              className
            )}
            placeholder={props.placeholder}
            {...props}
            onChange={(e) => setText(e.target.value)}
            value={text}
            ref={ref}
          />
          {props.isClearButton && text.length > 0 && (
            <Icon
              className={styles.icon}
              name="app-cancel_20"
              width={20}
              height={20}
              onClick={() => setText("")}
            />
          )}
        </div>
        {props.description && !props.errorText && <p>{props.description}</p>}
        {props.errorText && (
          <p className={clsx(styles.errorText)}>{props.errorText}</p>
        )}
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;
