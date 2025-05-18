import { createContext, PropsWithChildren, useEffect, useState } from "react";

type AppContextProps = {
  getValue: string | undefined;
  setValue: (arg: string) => void;
  result: string;
};

export const AppContext = createContext<AppContextProps>({
  getValue: "",
  setValue: (_arg: string) => {},
  result: "",
});

export default function AppProvider({ children }: PropsWithChildren) {
  const [btnClickedValue, setBtnClickedValue] = useState("");
  const [result, setResult] = useState("");

  const calculateResult = (expr: string) => {
    let arr: string[] = [];
    let num = "";

    for (let c of expr) {
      if ("+-*/".includes(c)) {
        if (num) arr.push(num);
        arr.push(c);
        num = "";
      } else {
        num = num + c;
      }
    }

    if (num) arr.push(num);

    let result = parseFloat(arr[0]) || 0;
    let i = 1;

    while (i < arr.length) {
      let operator = arr[i];
      let secondValue = parseFloat(arr[i + 1]);

      if (operator === "+") {
        result += secondValue;
      } else if (operator === "*") {
        result *= secondValue;
      } else if (operator === "-") {
        result -= secondValue;
      } else if (operator === "/") {
        result /= secondValue;
      }

      i += 2;
    }

    return result;
  };

  const onHandleBtnClicked = (buttonValue: string) => {
    switch (buttonValue) {
      case "backspace":
        setBtnClickedValue(btnClickedValue.slice(0, -1));
        break;
      case "plus":
        setBtnClickedValue(btnClickedValue + "+");
        break;
      case "minus":
        setBtnClickedValue(btnClickedValue + "-");
        break;
      case "close":
        setBtnClickedValue(btnClickedValue + "*");
        break;
      case "divide":
        setBtnClickedValue(btnClickedValue + "/");
        break;
      case "AC":
        setBtnClickedValue("");
        setResult("");
        break;
      default:
        setBtnClickedValue(btnClickedValue + buttonValue);
        break;
    }
  };

  useEffect(() => {
    const result = calculateResult(btnClickedValue);
    if (result) setResult(result.toString());
  }, [btnClickedValue]);

  return (
    <AppContext.Provider
      value={{
        getValue: btnClickedValue,
        setValue: onHandleBtnClicked,
        result,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
