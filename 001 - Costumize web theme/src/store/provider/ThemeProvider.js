import { useReducer } from 'react';

import ThemeContext from '../context/theme-context';

const initialTheme = {
  theme: 'theme-mode-dark',
  color: 'theme-color-cozy',
};

const themeReducer = (state = initialTheme, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload }
    case 'SET_COLOR':
      return { ...state, color: action.payload };
    default:
      return state;
  }
}

const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialTheme);

  const themeHandler = (theme) => {
    dispatch({ type: 'SET_THEME', payload: theme})
  }

  const colorHandler = (color) => {
    dispatch({ type: 'SET_COLOR', payload: color})
  }
  
  const themeContext = {
    theme: state.theme,
    color: state.color,
    themeHandler,
    colorHandler
  }

  return (
    <ThemeContext.Provider value={themeContext}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;