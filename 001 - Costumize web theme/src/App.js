import { useContext } from "react";
import ThemeMenu from "./components/ThemeMenu";
import ThemeContext from "./store/context/theme-context";

const mode_settings = [
  {
    id: 'light',
    name: 'Light',
    background: 'light-background',
    class: 'theme-mode-light',
  },
  {
    id: 'dark',
    name: 'Dark',
    background: 'dark-background',
    class: 'theme-mode-dark',
  },
];

const color_settings = [
  {
    id: 'cold',
    name: 'Cold',
    background: 'cold-color',
    class: 'theme-color-cold',
  },
  {
    id: 'cozy',
    name: 'Cozy',
    background: 'cozy-color',
    class: 'theme-color-cozy',
  },
];

function App() {
  const themeCtx = useContext(ThemeContext);
  


  const themeHandler = (theme) => {
    themeCtx.themeHandler(theme)
  }

  const colorHandler = (color) => {
    themeCtx.colorHandler(color)
  }
  
  return (
    <div className={`container ${themeCtx.theme} ${themeCtx.color}`}>
      <h1>Hello World!</h1>
      <div className='message-box'>
        <h3>This is a beautiful autumn!</h3>
      </div>
      <div className='row'>
        <div className='col-6'>
          <ThemeMenu
            items={mode_settings}
            className='col-6'
            onClick={themeHandler}
          />
        </div>
        <div className='col-6'>
          <ThemeMenu
            items={color_settings}
            className='col-4'
            onClick={colorHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
