import React, { DetailedHTMLProps } from "react";
import styles from "./TextArea.module.css";

interface TextAreaProps
  extends DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  placeholder: string;
  count: number;
  error: string;
}
export function TextArea({
  placeholder,
  count,
  error,
  ...props
}: TextAreaProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <textarea
        placeholder={placeholder}
        className={error !== "" ? styles.error : styles.textArea}
        {...props}
      ></textarea>
      {error ? <span style={{ color: "red" }}>{error}</span> : null}

      {count > 600 ? (
        <span>Превышен лимит символов в поле</span>
      ) : (
        <span>Осталось {600 - count}/600 символов</span>
      )}
    </div>
  );
}
