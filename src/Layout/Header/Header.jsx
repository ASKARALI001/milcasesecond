import React, {useEffect, useState} from 'react';
import {MdFavoriteBorder} from 'react-icons/md';
import {SlBasket} from 'react-icons/sl';
import Logo from '../../assets/image/logoMillcase.PNG'
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOutUser} from "../../redux/reducers/user";
import {BiSearchAlt} from "react-icons/bi";
import {changeSearch, getProducts} from "../../redux/reducers/products";
import Search from "../../components/Search/Search";

const Header = () => {

    const {favorites, basket} = useSelector((store) => store.persistedReducer.addFavorite)
    const {filter} = useSelector((store) => store.persistedReducer.products)

    const {user} = useSelector((store) => store.persistedReducer.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [search, setSearch] = useState(filter.search || '')

    useEffect(() => {
        dispatch(getProducts(filter))
        dispatch(changeSearch(search))
    }, [search])

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
                                {user.email === 'askar@mail.ru' ? <li className="header__right-item" onClick={() => navigate('/admin')}>Admin</li> : '' }
                                <li className="header__right-item">Доставка</li>
                                <li className="header__right-item">Контакты</li>
                            </ul>
                        </div>
                        <div className="header__right-bottom">
                            <div className="header__right-form">
                                <span><BiSearchAlt className='header__right-icons'/></span>
                                <input value={search} onChange={(e) => setSearch(e.target.value) } className="header__right-input" placeholder="Поиск" type="text"/>
                            </div>
                            {/*<Search/>*/}
                            <div className="header__right-favorites">
                                <Link to={'/favorite'}>
                                    <MdFavoriteBorder className='header__right-icons'/>
                                </Link>
                                <span className='header__right-span'>
                                    {favorites.dataLength}
                                </span>
                            </div>
                            <div className="header__right-basket">
                                <Link className='header__right-basket' to={'/basket'}>
                                    <SlBasket className='header__right-icons'/>
                                    <span className='header__right-span'>{basket.dataLength}</span>
                                </Link>
                            </div>
                            {
                                user.name.length ? <h2 onClick={() => dispatch(logOutUser())}
                                                       className='header__right-item'>Выйти</h2> :
                                    <h2 className='header__right-item' onClick={() => navigate('/login')}>Войти</h2>
                            }
                        </div>
                    </div>
                </div>

            </div>
            <HeaderMenu/>

        </header>
    );
};

export default Header;