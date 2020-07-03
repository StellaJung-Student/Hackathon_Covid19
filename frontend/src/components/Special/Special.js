import React from 'react';
import './Special.css';
import logo from './main.png';

const Special = ({ title }) => {
  return (
    <div className='special-header'>
      <h1 className='special-header__title'>{title}</h1>
      <div
        className='today-image'
        style={{
          backgroundImage: `url(${logo})`,
        }}
      ></div>
    </div>
  );
};

export default Special;
