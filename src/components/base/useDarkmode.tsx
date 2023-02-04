import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

export default function useDarkMode() {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state: RootState) => state.core);

  // const [theme, setTheme]: any = useState(
  //   typeof window !== 'undefined' ? localStorage.getItem('theme') : null,
  // );

  // const colorTheme = theme === 'dark' ? 'light' : 'dark';

  // useEffect(() => {
  //   const root = window.document.documentElement;

  //   root.classList.remove(colorTheme);
  //   root.classList.add(theme);
  //   localStorage.setItem('theme', theme);
  // }, [theme, colorTheme]);

  return [isDark];
}
