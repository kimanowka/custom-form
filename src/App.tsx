import { ChangeEvent, useEffect, useState } from "react";
import styles from "./App.module.css";
import { Account, Input, Button, TextArea } from "./Components/index";

export default function App(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [nameBlur, setNameBlur] = useState<boolean>(false);
  const [errorName, setErrorName] = useState<string>("");
  const [secondName, setSecondName] = useState<string>("");
  const [secondNameBlur, setSecondNameBlur] = useState<boolean>(false);
  const [errorSecondName, setErrorSecondName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [dateBlur, setDateBlur] = useState<boolean>(false);
  const [errorDate, setErrorDate] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [urlBlur, setUrlBlur] = useState<boolean>(false);
  const [errorUrl, setErrorUrl] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [telBlur, setTelBlur] = useState<boolean>(false);
  const [errorTel, setErrorTel] = useState<string>("");
  const [textAbout, setTextAbout] = useState<string>("");
  const [textAboutBlur, setTextAboutBlur] = useState<boolean>(false);
  const [errorTextAbout, setErrorTextAbout] = useState<string>("");
  const [textDescr, setTextDescr] = useState<string>("");
  const [textDescrBlur, setTextDescrBlur] = useState<boolean>(false);
  const [errorTextDescr, setErrorTextDescr] = useState<string>("");
  const [textStack, setTextStack] = useState<string>("");
  const [textStackBlur, setTextStackBlur] = useState<boolean>(false);
  const [errorTextStack, setErrorTextStack] = useState<string>("");
  const [visibleAccount, setVisibleAccount] = useState<boolean>(false);

  const handleTelInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numberOfInout = Number(e.currentTarget.value);
    if (Number.isInteger(numberOfInout)) {
      setTel(e.currentTarget.value.trim());
    } else {
      setErrorTel("Вводите только цирфы");
    }
  };
  useEffect(() => {
    if (nameBlur && name.length < 1) {
      setErrorName("Поле обязательно для заполнения");
    } else {
      setErrorName("");
    }
  }, [nameBlur, name.length]);
  useEffect(() => {
    if (secondNameBlur && secondName.length < 1) {
      setErrorSecondName("Поле обязательно для заполнения");
    } else {
      setErrorSecondName("");
    }
  }, [secondName.length, secondNameBlur]);
  useEffect(() => {
    if (dateBlur && date.length < 8) {
      setErrorDate("Введите полностью дату рождения");
    } else {
      setErrorDate("");
    }
  }, [date.length, dateBlur]);
  useEffect(() => {
    const re =
      /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi;
    if (urlBlur && url.length < 1) {
      setErrorUrl("Поле обязательно для заполнения");
    } else if (urlBlur && !url.startsWith("https://")) {
      setErrorUrl("Сайт должен начинаться с https://");
    } else if (urlBlur && !re.test(url)) {
      setErrorUrl("Введите корректный url сайта");
    } else {
      setErrorUrl("");
    }
  }, [url, url.length, urlBlur]);
  useEffect(() => {
    const re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    if (telBlur && tel.length < 11) {
      setErrorTel("Недостаточное количество цифр");
    } else if (telBlur && tel.length >= 12) {
      setErrorTel("Количество цифр превышает 12");
    } else if (telBlur && !re.test(tel)) {
      setErrorTel("Введите корректный номер телефона");
    } else {
      setErrorTel("");
    }
  }, [tel, tel.length, telBlur]);
  useEffect(() => {
    if (textAboutBlur && textAbout.length < 1) {
      setErrorTextAbout("Поле обязательно для заполнения");
    } else {
      setErrorTextAbout("");
    }
  }, [textAbout.length, textAboutBlur]);
  useEffect(() => {
    if (textDescrBlur && textDescr.length < 1) {
      setErrorTextDescr("Поле обязательно для заполнения");
    } else {
      setErrorTextDescr("");
    }
  }, [textDescr.length, textDescrBlur]);
  useEffect(() => {
    if (textStackBlur && textStack.length < 1) {
      setErrorTextStack("Поле обязательно для заполнения");
    } else {
      setErrorTextStack("");
    }
  }, [textStack.length, textStackBlur]);

  const handleClickSave = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (name.length < 1) {
      setErrorName("Поле обязательно для заполнения");
    } else {
      setErrorName("");
    }
    if (secondName.length < 1) {
      setErrorSecondName("Поле обязательно для заполнения");
    } else {
      setErrorSecondName("");
    }
    if (date.length < 8) {
      setErrorDate("Введите полностью дату рождения");
    } else {
      setErrorDate("");
    }
    if (url.length < 1) {
      setErrorUrl("Поле обязательно для заполнения");
    } else {
      setErrorUrl("");
    }
    if (tel.length < 11) {
      setErrorTel("Недостаточное количество цифр");
    } else if (telBlur && tel.length >= 12) {
      setErrorTel("Количество цифр превышает 12");
    } else {
      setErrorTel("");
    }
    if (textAbout.length < 1) {
      setErrorTextAbout("Поле обязательно для заполнения");
    } else {
      setErrorTextAbout("");
    }
    if (textDescr.length < 1) {
      setErrorTextDescr("Поле обязательно для заполнения");
    } else {
      setErrorTextDescr("");
    }
    if (textStack.length < 1) {
      setErrorTextStack("Поле обязательно для заполнения");
    } else {
      setErrorTextStack("");
    }
    let allBlur: boolean = false;
    let allRight: boolean = false;
    if (
      nameBlur &&
      secondNameBlur &&
      dateBlur &&
      urlBlur &&
      telBlur &&
      textAboutBlur &&
      textDescrBlur &&
      textStackBlur
    ) {
      allBlur = true;
    } else {
      allBlur = false;
    }
    if (
      errorName === "" &&
      errorSecondName === "" &&
      errorDate === "" &&
      errorUrl === "" &&
      errorTel === "" &&
      errorTextAbout === "" &&
      errorTextDescr === "" &&
      errorTextStack === ""
    ) {
      allRight = true;
    } else {
      allRight = false;
    }
    if (allRight && allBlur) {
      setName(name.charAt(0).toUpperCase() + name.slice(1));
      setSecondName(secondName.charAt(0).toUpperCase() + name.slice(1));
      setVisibleAccount(true);
    } else {
      setVisibleAccount(false);
    }
  };
  const handleClickReset = (e: any) => {
    e.preventDefault();
    setName("");
    setNameBlur(false);
    setErrorName("");
    setSecondName("");
    setSecondNameBlur(false);
    setErrorSecondName("");
    setDate("");
    setDateBlur(false);
    setErrorDate("");
    setUrl("");
    setUrlBlur(false);
    setErrorUrl("");
    setTel("");
    setTelBlur(false);
    setErrorTel("");
    setTextAbout("");
    setTextAboutBlur(false);
    setErrorTextAbout("");
    setTextDescr("");
    setTextDescrBlur(false);
    setErrorTextDescr("");
    setTextStack("");
    setTextStackBlur(false);
    setErrorTextStack("");
    setVisibleAccount(false);
  };
  return (
    <div className={styles.wrapper}>
      {visibleAccount ? (
        <Account
          name={name}
          date={date}
          tel={tel}
          secondName={secondName}
          url={url}
          textAbout={textAbout}
          textStack={textStack}
          textDescr={textDescr}
          handleClickReset={handleClickReset}
        />
      ) : (
        <form className={styles.form}>
          <Input
            label="Имя"
            type="text"
            placeholder="Введите имя"
            name="name"
            value={name}
            error={errorName}
            onBlur={() => setNameBlur(true)}
            onChange={(e) => {
              setName(e.currentTarget.value.trim());
            }}
          />
          <Input
            label="Фамилия"
            type="text"
            placeholder="Введите фамилию"
            name="secondName"
            value={secondName}
            error={errorSecondName}
            onBlur={() => setSecondNameBlur(true)}
            onChange={(e) => {
              setSecondName(e.currentTarget.value.trim());
            }}
          />
          <Input
            label="Сайт"
            type="url"
            placeholder="Введите сайт"
            name="url"
            value={url}
            error={errorUrl}
            onBlur={() => setUrlBlur(true)}
            onChange={(e) => {
              setUrl(e.currentTarget.value.trim());
            }}
          />
          <Input
            label="Дата рождения"
            type="date"
            placeholder="Введите дату рождения"
            name="date"
            value={date}
            error={errorDate}
            onBlur={() => setDateBlur(true)}
            onChange={(e) => {
              setDate(e.currentTarget.value.trim());
            }}
          />
          <Input
            label="Мобильный телефон"
            type="tel"
            placeholder="+7(000)000-00-00"
            name="tel"
            value={tel}
            error={errorTel}
            onBlur={() => setTelBlur(true)}
            onChange={(e) => {
              handleTelInputChange(e);
            }}
          />
          <TextArea
            placeholder="О себе"
            rows={7}
            error={errorTextAbout}
            value={textAbout}
            onBlur={() => {
              setTextAboutBlur(true);
            }}
            onChange={(e) => {
              setTextAbout(e.currentTarget.value.trim());
            }}
            count={textAbout.length}
          />
          <TextArea
            placeholder="Стек технологий"
            rows={7}
            error={errorTextStack}
            value={textStack}
            onBlur={() => {
              setTextStackBlur(true);
            }}
            onChange={(e) => {
              setTextStack(e.currentTarget.value.trim());
            }}
            count={textStack.length}
          />
          <TextArea
            placeholder="Описание последнего проекта"
            rows={7}
            error={errorTextDescr}
            value={textDescr}
            onBlur={() => {
              setTextDescrBlur(true);
            }}
            onChange={(e) => {
              setTextDescr(e.currentTarget.value.trim());
            }}
            count={textDescr.length}
          />
          <Button type="submit" name="Сохранить" onClick={handleClickSave} />
          <Button type="reset" name="Отменить" onClick={handleClickReset} />
        </form>
      )}
    </div>
  );
}
