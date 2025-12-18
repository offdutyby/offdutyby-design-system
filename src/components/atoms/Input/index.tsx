import styles from "./index.module.scss";
import clsx from "clsx";
import { forwardRef, HTMLAttributes } from "react";
type InputElementProps = HTMLAttributes<HTMLInputElement>;

interface InputProps extends InputElementProps {
  label?: string;
  placeholder?: string;
  /**
   * @description Fake Input이 필요한 경우 사용합니다.
   */
  isVisible?: boolean;
  /**
   * @description isError 사용 시, errorMessage prop을 함께 사용해주세요.
   */
  isError?: boolean;
  /**
   * @description isError 보다 description의 우선순의가 낮습니다. error 이슈 제거 시, description이 노출됩니다.
   */
  description?: string;
  errorMessage?: string;
  required?: boolean;
}

/**
 * - Input Base 역할에 충실합니다.
 * - Input Component의 기본 기능들은 구현 완료
 * - Class를 주입 받아 어디서든 자유롭게 사용 가능한 Input을 지향합니다. (Inline Style 제거)
 * - Error message가 descript 보다 우선순위가 높게 적용. (error 이슈 제거 시, description 노출)
 */

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isVisible = true, required = false, ...rest }, ref) => {
    const {
      label,
      placeholder,
      description,
      isError,
      errorMessage,
      className,
    } = rest;
    const {
      container,
      base,
      description: descriptionText,
      error,
      label: labelText,
    } = styles;
    const baseInputClassName = clsx(base, className, !isVisible && styles.hide);

    return (
      <div className={container}>
        {label && (
          <label className={labelText} htmlFor={rest.id}>
            {label}
          </label>
        )}
        <input
          className={baseInputClassName}
          placeholder={placeholder}
          data-testid={rest.id}
          aria-invalid
          required={required}
          {...rest}
          ref={ref}
        />
        {!isError && description && (
          <p className={descriptionText}>{description}</p>
        )}
        {isError && errorMessage && <p className={error}>{errorMessage}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;
