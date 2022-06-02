import { DetailedHTMLProps } from "react";
import { Button } from "../index";
import styles from "./Account.module.css";

interface AccountProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  name: string;
  url: string;
  date: string;
  tel: string;
  secondName: string;
  textAbout: string;
  textStack: string;
  textDescr: string;
  handleClickReset: (e: { preventDefault: () => void }) => void;
}

export function Account({
  name,
  url,
  date,
  tel,
  secondName,
  textAbout,
  textDescr,
  textStack,
  handleClickReset,
  ...props
}: AccountProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <h1>Анкета пользователя</h1>
      <div>
        <h4>Имя:</h4> {name}
      </div>
      <div>
        <h4>Фамилия:</h4> {secondName}
      </div>
      <div>
        <h4>Мобильный телефон:</h4> {tel}
      </div>
      <div>
        <h4>Сайт:</h4> {url}
      </div>
      <div>
        <h4>О себе:</h4> {textAbout}
      </div>
      <div>
        <h4>Описание последнего проекта:</h4> {textDescr}
      </div>
      <div>
        <h4>Стек технологий:</h4> {textStack}
      </div>
      <Button type="reset" name="Отменить" onClick={handleClickReset} />
    </div>
  );
}
