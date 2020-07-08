import React from 'react';
import './Navigation.scss';
import SubMenu from './SubMenu';
import CatalogLinks from '../../../HOCs/CatalogLinks/CatalogLinks';

const Navigation = () => {
  return (
    <nav className="nav">
      {/* <ul className="nav__menu">
                <li className="nav__menu-item">
                    <a>Цифровая техника</a>
                    <SubMenu/>
                </li>
                <li className="nav__menu-item">
                    <a>Оптика для фото</a>
                </li>
                <li className="nav__menu-item">
                    <a>Аксессуары</a>
                </li>
                <li className="nav__menu-item">
                    <a>Чехлы</a>
                </li>
                <li className="nav__menu-item">
                    <a>Студийное оборудование</a>
                </li>
                <li className="nav__menu-item">
                    <a>Штативы</a>
                </li>
                <li className="nav__menu-item">
                    <a>Фотоальбомы</a>
                </li>
                <li className="nav__menu-item">
                    <a>Фоторамки</a>
                </li>

            </ul> */}
      <CatalogLinks/>
    </nav>
  );
};

export default Navigation;