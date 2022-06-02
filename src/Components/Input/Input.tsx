import { DetailedHTMLProps } from "react";
import styles from "./Input.module.css";

interface InputProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value?: string;
  error: string;
}

export function Input({
  label,
  type,
  name,
  placeholder,
  value,
  error,
  ...props
}: InputProps): JSX.Element {
  return (
    <label className={styles.wrapper}>
      <h4>{label}</h4>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        className={error ? styles.input_error : styles.input}
        {...props}
      />
      {error ? <span style={{ color: "red" }}>{error}</span> : null}
    </label>
  );
}
