import React from 'react'

function ThemeMenu(props) {
  return (
    <div className='row flex-column'>
      {props.items.map((item, index) => (
        <div className='col-12 theme-button' key={index}>
          <div className={`btn-theme ${item.background}`} onClick={() => props.onClick(item.class)} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default ThemeMenu
