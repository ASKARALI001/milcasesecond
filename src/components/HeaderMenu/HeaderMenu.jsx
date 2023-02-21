import React from 'react';
import {Link} from "react-router-dom";

const HeaderMenu = () => {
    return (
        <nav className='header__menu'>
            <div className="container">
                <ul className="header__menu-list">
                    <li className="header__menu-item">Защитные стекла
                    <ul className="header__subMenu-list">
                        <li className="header__subMenu-item"><Link className='header__subMenu-link' to={'/go'}>Защитные стекла</Link></li>
                        <li className="header__subMenu-item"><Link className='header__subMenu-link' to={'/go'}>Защитные стекла</Link></li>
                        <li className="header__subMenu-item"><Link className='header__subMenu-link' to={'/go'}>Защитные стекла</Link></li>
                        <li className="header__subMenu-item"><Link className='header__subMenu-link' to={'/go'}>Защитные стекла</Link></li>
                    </ul>

                    </li>
                    <li className="header__menu-item">Airpods
                        <ul className="header__subMenu-list">
                            <li className="header__subMenu-item"><Link className='header__subMenu-link' to={'/go'}>Airpods 2</Link></li>
                            <li className="header__subMenu-item"><Link className='header__subMenu-link' to={'/go'}>Airpods 3</Link></li>
                            <li className="header__subMenu-item"><Link className='header__subMenu-link' to={'/go'}>Airpods pro</Link></li>
                            <li className="header__subMenu-item"><Link className='header__subMenu-link' to={'/go'}>Airpods</Link></li>
                        </ul>
                    </li>
                    <li className="header__menu-item">Аксессуары
                        <ul className="header__subMenu-list">
                            <li className="header__subMenu-item"><Link className='header__subMenu-link' to={'/go'}>Чехлы для наушников</Link></li>
                            <li className="header__subMenu-item"><Link className='header__subMenu-link' to={'/go'}>Внешние аккумуляторы</Link></li>
                            <li className="header__subMenu-item"><Link className='header__subMenu-link' to={'/go'}>Ленты-держатели</Link></li>
                            <li className="header__subMenu-item"><Link className='header__subMenu-link' to={'/go'}>Кабели для зарядки телефона</Link></li>
                            <li className="header__subMenu-item"><Link className='header__subMenu-link' to={'/go'}>Держатель для телефона</Link></li>
                        </ul>
                    </li>
                    <li className="header__menu-item">Чехлы</li>
                </ul>
            </div>
            
        </nav>
    );
};

export default HeaderMenu;