function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
      {darkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
    </button>
  );
}

export default ThemeToggle;
