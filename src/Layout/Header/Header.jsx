import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { SlBasket } from 'react-icons/sl';
import Logo from '../../assets/image/logoMillcase.PNG'
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {

    const {user} = useSelector((store) => store.persistedReducer.user)
    console.log(user.name)

    return (
        <header className="header">
            <div className="container">
                <div className='header__column'>
                    <div className="header__left">
                        <p className="header__left-desc">Заказы принимаются только через сайт</p>
                        <div className="header__left-gps">
                            <a href="tel:+996 799 89 89 88" className="header__left-num">+996 799 89 89 88</a>
                            <p className='header__left-desc'>Ежедневно 10:00 - 20:00</p>
                        </div>

                    </div>
                    <div className="header__logo">
                        <Link to={'/'}><img className='header__logo-img' src={Logo} alt='Logo'/></Link>
                    </div>
                    <div className="header__right">
                        <div className="header__right-top">
                            <ul className='header__right-list'>
                                <li className="header__right-item">Оплата</li>
                                <li className="header__right-item">Доставка</li>
                                <li className="header__right-item">Контакты</li>
                            </ul>
                        </div>
                        <div className="header__right-bottom">
                            {
                                user.name.length ? <h2 className='header__right-item'>Выйти</h2> : <h2 className='header__right-item'>Войти</h2>
                            }





                        <div className="header__right-favorites">
                            <Link to={'/favorite'}>
                                <MdFavoriteBorder className='header__right-icons'/>
                            </Link> 0
                        </div>
                            <div className="header__right-basket">
                                <Link  className='header__right-basket' to={'/basket'}>
                                    <SlBasket className='header__right-icons'/>
                                    Корзина
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <HeaderMenu/>
            
        </header>
    );
};

export default Header;