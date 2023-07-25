import React from 'react';
import style from '../styles/button.module.css';
const Button = () => {
  return (
    <div className={style.button_container}>
      <button className={style.button}>Button Text</button>
    </div>
  );
};

export default Button;
