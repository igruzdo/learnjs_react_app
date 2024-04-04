import { useState } from "react";
import { Theme } from "../../context/theme.context";

export interface UseTheme {
  theme: Theme;
  setTheme: () => void;
}

export const useTheme = (): UseTheme => {
  const [theme, setTheme] = useState<Theme>('dark');

  return {
    theme,
    setTheme: () => setTheme((currentTheme) => {
      if (currentTheme === 'dark') {
        return 'white'
      }
      return 'dark';
    })
  };
};