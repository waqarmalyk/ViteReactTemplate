import React from "react";

type IReturnType<T> = [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>
];
export const useLocalStorage = <T extends {}>(
  key: string,
  initialValue?: T
): IReturnType<T> => {
  const [state, setState] = React.useState<T | undefined>(() => {
    if (!initialValue) return;
    try {
      const value = localStorage.getItem(key);

      return JSON.parse(value!);
    } catch (err) {
      return initialValue;
    }
  });

  React.useEffect(() => {
    if (state) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (err) {
        console.log(err);
      }
    }
  }, [state, key]);
  return [state, setState];
};
