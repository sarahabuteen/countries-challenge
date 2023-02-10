import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThemeContext from './contexts/theme-context';
import Country from './views/country';
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
      <main className={`theme-${theme}`}>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:name" element={<Country />} />
          </Routes>
        </BrowserRouter>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
