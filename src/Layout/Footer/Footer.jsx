import React from 'react';
import Logo from "../../assets/image/logoMillcase.PNG";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div>
                        <div className="header__logo">
                            <img className='header__logo-img' src={Logo} alt='Logo'/>
                        </div>
                        <p className="footer__desc">Milcase — чехлы для мобильных устройств</p></div>
                    <div className="footer__menu">
                        <nav className="footer__nav">
                            <ul className="footer__list">
                                <li className="footer__item">О магазине</li>
                                <li className="footer__item">Доставка</li>
                                <li className="footer__item">Оплата</li>
                                <li className="footer__item">Гарантия</li>
                            </ul>
                            <ul className="footer__list">
                                <li className="footer__item">Каталог дизайнов</li>
                                <li className="footer__item">Блог</li>
                                <li className="footer__item">Отзывы</li>
                                <li className="footer__item">Контакты</li>
                            </ul>
                        </nav>
                        <div className="footer__card">
                            <img src="https://case-place.ru/images/themes/new/img/pay-metod.png" alt=""/>

                        </div>
                    </div>
                    <div className="footer__info">
                        <div className="footer__call">
                            <h4 className="footer__num">+996 500 889 888</h4>
                            <p className="footer__desc">Ежедневно 12:00-20:00, Звонок бесплатно</p>
                        </div>
                        <div className="footer__contact"></div>
                        <p className="footer__desc">
                            Напишите нам</p>
                        <h3 className="footer__subtitle">CONTECT@MILCASE.KG</h3>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;