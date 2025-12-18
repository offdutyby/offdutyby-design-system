import Input from "@/components/atoms/Input";
import styles from "./index.module.scss";
import clsx from "clsx";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { formatCurrency } from "@/utils/number";

interface CurrencyInputProps<T extends FieldValues> {
  placeholder?: string;
  description?: string;
  name: Path<T>;
  control: Control<T>;
}

const CurrencyInput = <T extends FieldValues>({
  description,
  placeholder,
  name,
  control,
}: CurrencyInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ...rest } }) => (
        <>
          <Input
            className={clsx(styles.container)}
            placeholder={placeholder}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const refinedValue = formatCurrency(e.target.value);
              onChange(refinedValue);
            }}
            {...rest}
          />
          <div className={styles.description}>{description}</div>
        </>
      )}
    />
  );
};

export default CurrencyInput;
