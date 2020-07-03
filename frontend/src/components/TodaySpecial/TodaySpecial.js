import React from 'react';
import './TodaySpecial.css';
import logo from './main.png';

const TodaySpecial = ({ title }) => {
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

export default TodaySpecial;
