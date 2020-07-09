import React from 'react';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router';

const SubMenu = () => {
  return (
    <ul className="nav__submenu">
      <div className="vl"></div>
      <li className="nav__submenu-item ">
        <NavLink exact to='/cameras'>Фотоапараты</NavLink>
        <a href='#'>Кардридеры</a>
      </li>
      <li className="nav__submenu-item ">
        <a href='#'>Видеокамеры</a>
        <a href='#'>USB флэш накопители</a>
      </li>
      <li className="nav__submenu-item ">
        <a href='#'>Вспышки</a>
        <a href='#'>Внешние жесткие диски</a>
      </li>
      <li className="nav__submenu-item ">
        <a href='#'>Экшн камеры</a>
        <a href='#'>Фотопринтеры</a>
      </li>
      <li className="nav__submenu-item ">
        <a href='#'>Карты памяти</a>
        <a href='#'>Фотобумага для фотопринтера</a>
      </li>
    </ul>
  );
};

export default withRouter(SubMenu);