import { useState, useRef, useEffect } from "react";
import { FaPalette, FaCheck } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import "./ThemeSwitcher.css";

function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { themeId, changeTheme, availableThemes } = useTheme();
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const optionRefs = useRef([]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // When menu opens, focus the currently selected or first theme option
  useEffect(() => {
    if (isOpen) {
      const selectedIndex = availableThemes.findIndex((t) => t.id === themeId);
      const targetIndex = selectedIndex >= 0 ? selectedIndex : 0;
      requestAnimationFrame(() => {
        optionRefs.current[targetIndex]?.focus();
      });
    }
  }, [isOpen, themeId, availableThemes]);

  // Handle keyboard events on the toggle button
  const handleButtonKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  // Handle keyboard navigation within the menu
  const handleMenuKeyDown = (e, index) => {
    if (e.key === "Escape") {
      e.preventDefault();
      closeDropdown();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % availableThemes.length;
      optionRefs.current[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (index - 1 + availableThemes.length) % availableThemes.length;
      optionRefs.current[prevIndex]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      optionRefs.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      optionRefs.current[availableThemes.length - 1]?.focus();
    }
  };

  return (
    <div className="theme-switcher-container" ref={dropdownRef}>
      <button
        ref={buttonRef}
        className={`theme-switcher-btn ${isOpen ? "active" : ""}`}
        onClick={toggleDropdown}
        onKeyDown={handleButtonKeyDown}
        aria-label="Change theme"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        title="Change theme"
        type="button"
      >
        <FaPalette className="theme-icon" aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          className="theme-dropdown-menu"
          role="menu"
          aria-label="Select theme"
        >
          <div className="theme-dropdown-title" id="theme-menu-label">
            Theme
          </div>
          <div className="theme-options-list" role="group" aria-labelledby="theme-menu-label">
            {availableThemes.map((t, idx) => {
              const isSelected = themeId === t.id;

              return (
                <button
                  key={t.id}
                  ref={(el) => (optionRefs.current[idx] = el)}
                  className={`theme-option-btn ${isSelected ? "selected" : ""}`}
                  onClick={() => {
                    changeTheme(t.id);
                    setIsOpen(false);
                    buttonRef.current?.focus();
                  }}
                  onKeyDown={(e) => handleMenuKeyDown(e, idx)}
                  role="menuitemradio"
                  aria-checked={isSelected}
                  aria-label={`${t.name} theme`}
                  type="button"
                >
                  <span
                    className="theme-color-preview"
                    style={{ backgroundColor: t.color }}
                    aria-hidden="true"
                  ></span>
                  <span className="theme-option-name">{t.name}</span>
                  {isSelected && <FaCheck className="theme-check-icon" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ThemeSwitcher;
