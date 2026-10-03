import { createContext, useContext, useState, useEffect } from "react";
import { THEME_CONFIGS } from "./themeConfig";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => {
    const saved = localStorage.getItem("portfolio_theme");
    return saved && THEME_CONFIGS[saved] ? saved : "default";
  });

  const activeTheme = THEME_CONFIGS[themeId] || THEME_CONFIGS.default;

  useEffect(() => {
    const root = document.documentElement;
    const vars = activeTheme.cssVars;

    Object.keys(vars).forEach((key) => {
      root.style.setProperty(key, vars[key]);
    });

    localStorage.setItem("portfolio_theme", themeId);
  }, [themeId, activeTheme]);

  const changeTheme = (newThemeId) => {
    if (THEME_CONFIGS[newThemeId]) {
      setThemeId(newThemeId);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        themeId,
        theme: activeTheme,
        threeConfig: activeTheme.threeConfig,
        changeTheme,
        availableThemes: Object.values(THEME_CONFIGS),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
