import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThemeContext from './contexts/theme-context';
import Home from './views/home';

function App() {
  const getCurrentTheme = () => {
    let currentTheme = localStorage.getItem('theme');
    if (!currentTheme) {
      currentTheme = localStorage.setItem('theme', 'light');
    }
    return currentTheme;
  };

  const [theme, setTheme] = useState(getCurrentTheme());
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
