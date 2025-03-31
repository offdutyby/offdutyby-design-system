import Icon from "@/components/atoms/Icon";
import styles from "./index.module.scss";
import clsx from "clsx";
import { forwardRef, HTMLAttributes, useState } from "react";
import { Input } from "@/components";

type InputElementProps = HTMLAttributes<HTMLInputElement>;
interface UserInfoInputProps extends InputElementProps {
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

const UserInfoInput = forwardRef<HTMLInputElement, UserInfoInputProps>(
  ({ className, ...props }, ref) => {
    const [text, setText] = useState("");

    const containerClassName = clsx(
      styles.container,
      className,
      props.errorText && styles.error
    );
    return (
      <>
        {props.title && <p className={styles.title}>{props.title}</p>}
        <div className={styles.inputContainer}>
          <Input
            className={containerClassName}
            placeholder={props.placeholder}
            {...props}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
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

UserInfoInput.displayName = "UserInfoInput";

export default UserInfoInput;
