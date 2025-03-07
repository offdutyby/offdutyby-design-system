import Icon from "@/components/atoms/Icon";
import styles from "./index.module.scss";
import clsx from "clsx";
import { forwardRef, HTMLAttributes, useEffect, useState } from "react";
import Chips from "@/components/atoms/Chips";

type InputElementProps = HTMLAttributes<HTMLInputElement>;
interface InputProps extends InputElementProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorText?: string;
  helperText?: string;
  disabled?: boolean;
  readOnly?: boolean;
  type?: string;
  title?: string;
  description?: string;
  isClearButton?: boolean;
  accountPlaceholder?: string;
  bankPlaceholder?: string;
}

const AccountInput = forwardRef<HTMLInputElement, InputProps>(
  ({ accountPlaceholder, bankPlaceholder, title, description }, ref) => {
    const [text, setText] = useState("");
    const [bank, setBank] = useState("");

    useEffect(() => {
      if (text.length > 7) {
        setBank("우리 은행");
      }

      if (text.length < 8) {
        setBank("");
      }
    }, [text]);

    return (
      <div className={styles.container}>
        <div className={clsx(styles.top)}>
          <div className={styles.title}>{title}</div>
          <input
            ref={ref}
            type="text"
            value={text}
            placeholder={accountPlaceholder}
            onChange={(e) => setText(e.target.value)}
          />
          <Icon
            onClick={() => {
              setText("");
              setBank("");
            }}
            className={styles.icon}
            name="app-cancel_20"
            width={20}
            height={20}
          />
        </div>

        <div className={clsx(styles.bottom)}>
          <input placeholder={bankPlaceholder} type="text" value={bank} />
        </div>

        {text.length < 8 ? (
          <div className={styles.description}>{description}</div>
        ) : (
          <Chips
            fillGray
            padding="5px 10px 5px 5px"
            radius="8px"
            prefix={<Icon name="bank_small-woori" width={16} height={16} />}
          >
            우리 10200302020
          </Chips>
        )}
      </div>
    );
  }
);

AccountInput.displayName = "AccountInput";

export default AccountInput;
