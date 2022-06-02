import { DetailedHTMLProps } from "react";
import styles from "./Button.module.css";
interface ButtonProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  name: string;
  type: "submit" | "reset" | "button" | undefined;
}

export function Button({ name, type, ...props }: ButtonProps): JSX.Element {
  return (
    <button type={type} {...props} className={styles.btn}>
      {name}
    </button>
  );
}
