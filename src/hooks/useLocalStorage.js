import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defValue) => {
  const [state, setState] = useState(
    () => localStorage.getItem(key) ?? defValue,
  );

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};
