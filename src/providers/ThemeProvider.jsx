import React, { useEffect } from 'react';
import {ThemeContext} from './context';
import {useLocalStorage} from '../hooks/useLocalStorage';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    theme === "dark" 
    ? document.body.classList.add("dark")
    : document.body.classList.remove("dark")
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
