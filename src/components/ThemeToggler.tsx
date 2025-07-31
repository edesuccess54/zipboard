import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggler = () => {
  const {theme, toggleTheme} = useTheme();
  const isDark = theme === "dark"

  return (
    <button
      style={{ backgroundColor: `${isDark ? "#262626 " : "#b3b0b0ff"}` }}
      onClick={toggleTheme}
      className="toggler"
    >
      {isDark ? (
        <>
          <Sun size={18} style={{ color: "#FFD700" }} />
          <span>Light</span>
        </>
      ) : (
        <>
          <Moon size={18} style={{ color: "#8B5CF6" }} />
          <span>Dark</span>
        </>
      )}
    </button>
  );
}

export default ThemeToggler