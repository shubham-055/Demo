import React, {useState, createContext} from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [mode, setMode] = useState('light');
  return (
    <ThemeContext.Provider
      value={{
        mode,
        updateMode: () => setMode(mode === 'dark' ? 'light' : 'dark'),
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;