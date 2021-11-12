import React from 'react';

const ThemeContext = React.createContext({
  theme: '',
  color: '',
  themeHandler: (theme)=> {},
  colorHandler: (color)=> {}
});

export default ThemeContext;
