import React from 'react';

const SubMenu = () => {
    return (
        <ul className="nav__submenu">
            <div className="vl"></div>
            <li className="nav__submenu-item ">
                <a>Фотоапараты</a>
                <a>Кардридеры</a>
            </li>
            <li className="nav__submenu-item ">
                <a>Видеокамеры</a>
                <a>USB флэш накопители</a>
            </li>
            <li className="nav__submenu-item ">
                <a>Вспышки</a>
                <a>Внешние жесткие диски</a>
            </li>
            <li className="nav__submenu-item ">
                <a>Экшн камеры</a>
                <a>Фотопринтеры</a>
            </li>
            <li className="nav__submenu-item ">
                <a>Карты памяти</a>
                <a>Фотобумага для фотопринтера</a>
            </li>
        </ul>
    );
};

export default SubMenu;