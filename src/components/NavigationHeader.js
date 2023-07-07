import React from "react";
import NavHeader from "../assets/NavHeader.css";
import BulletinLogo from "../assets/images/BulletinLogo.png";
import AppButton  from "./AppButton";

const NavigationHeader = () => {
const dummy_link = "#"
  
    return (
    <div className="navigation__header__container">
      <nav className="navigation__container">
        <div className="logo__container">
          <img src={BulletinLogo} alt="App Logo"></img>
        </div>

        <div className="navigation__menu">
          <ul className="navigation__menu__items">
            <a href={dummy_link}><li className="navigation__menu__item">Home</li></a>
            <a href={dummy_link}><li className="navigation__menu__item">Features</li></a>
            <a href={dummy_link}><li className="navigation__menu__item">Pricing</li></a>
            <AppButton />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationHeader;
