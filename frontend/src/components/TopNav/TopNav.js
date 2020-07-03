import React from 'react';
import './TopNav.css';
import logo from './logo.png';

const TopNav = ({ displayLogIn, displaySignUp, isLoggedIn }) => {
  console.log(isLoggedIn);
  return (
    <header className='screen-header'>
      <div
        className='screen-header__logo'
        style={{
          backgroundImage: `url(${logo})`,
        }}
      ></div>
      <div className='screen-header-info'>
        <div className='screen-header-info__top'>
          <div className='user-info'>
            Hi, {isLoggedIn ? localStorage.getItem('name') : 'Guest!'}
          </div>
          <div className='top-menu'>
            {isLoggedIn ? (
              <>
                <div
                  className='top-meun__item'
                  onClick={() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('name');
                    window.location.href = '/';
                  }}
                >
                  Sign off
                </div>
              </>
            ) : (
              <>
                <div className='top-meun__item' onClick={displayLogIn}>
                  Sign in
                </div>
                <div className='top-meun__item'>|</div>
                <div className='top-meun__item' onClick={displaySignUp}>
                  Sign up
                </div>
              </>
            )}
          </div>
        </div>
        <div className='screen-header__search'>
          <span>
            <i className='fas fa-search fa-lg' />
          </span>
          <input type='text' />
        </div>
      </div>
    </header>
  );
};

export default TopNav;
