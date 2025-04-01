import clsx from "clsx";
import styles from "./index.module.scss";
import Input from "@/components/atoms/Input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import Icon from "@/components/atoms/Icon";

interface UserInfoInputProps<T extends FieldValues> {
  title?: string;
  placeholder?: string;
  description?: string;
  name: Path<T>;
  control: Control<T>;
  onReset: () => void;
}

const UserInfoInput = <T extends FieldValues>({
  title,
  placeholder,
  description,
  name,
  control,
  onReset,
}: UserInfoInputProps<T>) => {
  const {
    container,
    title: titleText,
    description: descriptionText,
    errorText,
    inputContainer,
    icon,
  } = styles;
  const containerClassname = clsx([inputContainer]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className={containerClassname}>
          <p className={titleText}>{title}</p>
          <Input {...field} className={container} placeholder={placeholder} />
          {description && !error && (
            <p className={descriptionText}>{description}</p>
          )}
          {error && <p className={errorText}>{error?.message}</p>}

          <Icon
            className={icon}
            name="app-cancel_20"
            width={20}
            height={20}
            onClick={onReset}
          />
        </div>
      )}
    />
  );
};

export default UserInfoInput;
