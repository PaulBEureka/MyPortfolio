import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { MdDarkMode } from 'react-icons/md';

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="bg-transparent border-0 toggle-button nav-link mx-auto block" title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
      <MdDarkMode size={24} />
    </button>
  );
}

export default ThemeToggle;