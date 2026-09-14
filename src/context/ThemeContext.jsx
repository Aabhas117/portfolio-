import { createContext, useContext, useState, useEffect } from "react";

export const THEME_CONFIGS = {
  default: {
    id: "default",
    name: "Default",
    color: "#20C9A6",
    cssVars: {
      "--bg-primary": "#080D1C",
      "--bg-secondary": "#F0EEE7",
      "--bg-surface": "rgba(255, 255, 255, 0.94)",
      "--bg-surface-solid": "#FFFFFF",
      "--bg-card": "#FFFFFF",
      "--text-primary": "#111111",
      "--text-secondary": "#555555",
      "--text-muted": "#777777",
      "--border-subtle": "#D9D6CE",
      "--border-accent": "rgba(32, 201, 166, 0.4)",
      "--accent-mint": "#63E6C2",
      "--accent-teal": "#20C9A6",
      "--accent-purple": "#8B5CF6",
      "--accent-pink": "#F472B6",
      "--accent-blue": "#60A5FA",
    },
    threeConfig: {
      threeBg: "#080D1C",
      gridColors: ["#3B82F6", "#111A35"],
      gridOpacity: 0.15,
      particleColor: "#3B82F6",
      particleOpacity: 0.25,
      lightAmbient: 0.7,
      lightDirectionalColor: "#3B82F6",
      lightPointColor: "#1D4ED8",
      meshWireframeColor: "#3B82F6",
      meshSolidColor: "#1D4ED8",
      meshAccentColor: "#8B5CF6",
      meshNodeColor: "#60A5FA",
      text3DColor: "#93C5FD",
      text3DFillOpacity: 0.45,
    },
  },
  ocean: {
    id: "ocean",
    name: "Ocean",
    color: "#38BDF8",
    cssVars: {
      "--bg-primary": "#0A192F",
      "--bg-secondary": "#112240",
      "--bg-surface": "rgba(17, 34, 64, 0.94)",
      "--bg-surface-solid": "#112240",
      "--bg-card": "#112240",
      "--text-primary": "#F8FAFC",
      "--text-secondary": "#94A3B8",
      "--text-muted": "#64748B",
      "--border-subtle": "#1E293B",
      "--border-accent": "rgba(56, 189, 248, 0.4)",
      "--accent-mint": "#38BDF8",
      "--accent-teal": "#0EA5E9",
      "--accent-purple": "#60A5FA",
      "--accent-pink": "#F472B6",
      "--accent-blue": "#38BDF8",
    },
    threeConfig: {
      threeBg: "#0A192F",
      gridColors: ["#38BDF8", "#1E293B"],
      gridOpacity: 0.2,
      particleColor: "#38BDF8",
      particleOpacity: 0.3,
      lightAmbient: 0.7,
      lightDirectionalColor: "#38BDF8",
      lightPointColor: "#0284C7",
      meshWireframeColor: "#38BDF8",
      meshSolidColor: "#0284C7",
      meshAccentColor: "#60A5FA",
      meshNodeColor: "#38BDF8",
      text3DColor: "#BAE6FD",
      text3DFillOpacity: 0.5,
    },
  },
  purple: {
    id: "purple",
    name: "Purple",
    color: "#A855F7",
    cssVars: {
      "--bg-primary": "#0F0715",
      "--bg-secondary": "#1A0B2E",
      "--bg-surface": "rgba(26, 11, 46, 0.94)",
      "--bg-surface-solid": "#1A0B2E",
      "--bg-card": "#1A0B2E",
      "--text-primary": "#F3E8FF",
      "--text-secondary": "#C084FC",
      "--text-muted": "#9333EA",
      "--border-subtle": "#2E1065",
      "--border-accent": "rgba(168, 85, 247, 0.4)",
      "--accent-mint": "#E879F9",
      "--accent-teal": "#C084FC",
      "--accent-purple": "#A855F7",
      "--accent-pink": "#F472B6",
      "--accent-blue": "#818CF8",
    },
    threeConfig: {
      threeBg: "#0F0715",
      gridColors: ["#A855F7", "#2E1065"],
      gridOpacity: 0.2,
      particleColor: "#C084FC",
      particleOpacity: 0.3,
      lightAmbient: 0.7,
      lightDirectionalColor: "#A855F7",
      lightPointColor: "#7E22CE",
      meshWireframeColor: "#A855F7",
      meshSolidColor: "#7E22CE",
      meshAccentColor: "#E879F9",
      meshNodeColor: "#C084FC",
      text3DColor: "#E9D5FF",
      text3DFillOpacity: 0.5,
    },
  },
  mint: {
    id: "mint",
    name: "Mint",
    color: "#34D399",
    cssVars: {
      "--bg-primary": "#041E19",
      "--bg-secondary": "#0A2E27",
      "--bg-surface": "rgba(10, 46, 39, 0.94)",
      "--bg-surface-solid": "#0A2E27",
      "--bg-card": "#0A2E27",
      "--text-primary": "#ECFDF5",
      "--text-secondary": "#A7F3D0",
      "--text-muted": "#059669",
      "--border-subtle": "#064E3B",
      "--border-accent": "rgba(52, 211, 153, 0.4)",
      "--accent-mint": "#34D399",
      "--accent-teal": "#10B981",
      "--accent-purple": "#6EE7B7",
      "--accent-pink": "#F472B6",
      "--accent-blue": "#38BDF8",
    },
    threeConfig: {
      threeBg: "#041E19",
      gridColors: ["#34D399", "#064E3B"],
      gridOpacity: 0.2,
      particleColor: "#34D399",
      particleOpacity: 0.3,
      lightAmbient: 0.7,
      lightDirectionalColor: "#34D399",
      lightPointColor: "#047857",
      meshWireframeColor: "#34D399",
      meshSolidColor: "#047857",
      meshAccentColor: "#6EE7B7",
      meshNodeColor: "#34D399",
      text3DColor: "#A7F3D0",
      text3DFillOpacity: 0.5,
    },
  },
};

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

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
