import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [theme, setTheme]: any = useState(localStorage.getItem('theme'));

  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  // useEffect(() => {
  //   const root = window.document.documentElement;

  //   root.classList.remove(colorTheme);
  //   root.classList.add(theme);
  //   localStorage.setItem('theme', theme);
  // }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
