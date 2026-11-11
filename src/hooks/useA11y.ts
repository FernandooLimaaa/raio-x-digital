import { createContext, useContext } from 'react';
import { FONT_STEPS } from '../data';

export interface A11yContextValue {
  fontStep: number;
  setFontStep: (step: number) => void;
  highContrast: boolean;
  setHighContrast: (value: boolean) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const A11yContext = createContext<A11yContextValue>({
  fontStep: 0,
  setFontStep: () => {},
  highContrast: false,
  setHighContrast: () => {},
  theme: 'dark',
  setTheme: () => {},
});

export function useA11y() {
  return useContext(A11yContext);
}

export { FONT_STEPS };
