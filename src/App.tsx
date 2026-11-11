import { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { A11yContext } from './hooks/useA11y';
import { FONT_STEPS } from './data';

export default function App() {
  const [fontStep, setFontStep] = useState(0);
  const [highContrast, setHighContrast] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = window.localStorage.getItem('theme');
    return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
  });

  useEffect(() => {
    document.documentElement.style.fontSize = FONT_STEPS[fontStep] + 'px';
  }, [fontStep]);

  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', highContrast);
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', theme === 'light');
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <A11yContext.Provider value={{ fontStep, setFontStep, highContrast, setHighContrast, theme, setTheme }}>
      <RouterProvider router={router} />
    </A11yContext.Provider>
  );
}
