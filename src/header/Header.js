import React from 'react';
import logo from '../images/logo.png';
import styles from '../css/Header.css';

function Header() {
    return (
      <header className="Header">
        <div className="Div-header">
            <div className="LogoTextWrapper">
                <div className="LogoWrapper">
                    <a href="/"><img href="/" src={logo} className="logo" alt="logo" /></a>
                </div>
                <div className="TextWrapper">
                    <a href="/" className="LogoHref">СТУДЕНТЫ & <span className="TextWrappers">ГРУППЫ</span></a>
                </div>
            </div>
            <div className="ButtonWrapper">
              <p className="AddGroup">
                  <a href="/addgroup" className="push_button blue">Добавить группу</a>
                  <a href="/addstudent" className="push_button blue">Добавить студента</a>
              </p>
            </div>
        </div>
      </header>
    );
  }

  export default Header;
  