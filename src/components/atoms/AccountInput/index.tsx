import Icon from "@/components/atoms/Icon";
import styles from "./index.module.scss";
import clsx from "clsx";
import Input from "@/components/atoms/Input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import Chips from "@/components/atoms/Chips";
import { refineStringToNumber } from "@/utils/number";

interface AccountInputProps<T extends FieldValues> {
  title?: string;
  accountPlaceholder?: string;
  bankPlaceholder?: string;
  description?: string;
  name: Path<T>;
  control: Control<T>;
  onReset: () => void;
}

const AccountInput = <T extends FieldValues>({
  accountPlaceholder,
  bankPlaceholder,
  title,
  description,
  name,
  control,
  onReset,
}: AccountInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ...rest } }) => (
        <div className={styles.container}>
          <div className={clsx(styles.top)}>
            <div className={styles.title}>{title}</div>
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.value.length > 11) return;
                const refineValue = refineStringToNumber(e.target.value);

                onChange(refineValue);
              }}
              {...rest}
              className={styles.input}
              placeholder={accountPlaceholder}
            />
            <Icon
              onClick={onReset}
              className={styles.icon}
              name="app-cancel_20"
              width={20}
              height={20}
            />
          </div>

          <div className={clsx(styles.bottom)}>
            <input
              placeholder={bankPlaceholder}
              type="text"
              value={rest.value.length < 8 ? "" : "우리"}
            />
          </div>
          {rest.value.length < 8 ? (
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
      )}
    />
  );
};

export default AccountInput;
