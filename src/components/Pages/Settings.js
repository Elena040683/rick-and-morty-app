import React from 'react';
import { ThemeContext } from '../../providers/context';
import { useContext } from 'react';

const Settings = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="container text-center fw-bold fs-4 my-4">
      <header>
        <h2>Theme changing section</h2>
      </header>

      <main>
        <p className="fs-5 my-4">
          For changing theme, please, press the button
        </p>
        <button
          type="button"
          className="btn btn-primary my-4"
          onClick={handleClick}
        >
          Theme
        </button>
      </main>
      <footer className="">
        <p className="position-absolute bottom-0 start-50 translate-middle-x">
          &copy; All rights reserved 2024
        </p>
      </footer>
    </div>
  );
};

export default Settings;
