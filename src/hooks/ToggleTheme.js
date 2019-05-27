import { useState, useEffect } from 'react';

const ToggleTheme = initialValue => {
  const [theme, setTheme] = useState(initialValue);

  useEffect(() => {
    theme
      ? (document.body.dataset.theme = 'dark')
      : (document.body.dataset.theme = 'light');
  }, [theme]);

  return [theme, setTheme];
};

export default ToggleTheme;
