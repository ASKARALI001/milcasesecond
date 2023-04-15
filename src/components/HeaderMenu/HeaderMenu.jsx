import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import SelectBrand from "./SelectBrand";
import {useDispatch, useSelector} from "react-redux";
import {changeBrand, getProducts} from "../../redux/reducers/products";
import MenuItem from "@mui/material/MenuItem";
import {getFavorite} from "../../redux/reducers/addFavorite";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";



const brands = ['Apple', 'Samsung', 'Xiaomi', 'Honor', 'Huawei']


const HeaderMenu = () => {
    const { filter} = useSelector((store) => store.persistedReducer.products)

    const dispatch = useDispatch()


    const [brand, setBrand] = useState(filter.brand || '')

    const handleChange = (e) => {
       setBrand(e)
    };

    useEffect(() => {
        dispatch(changeBrand(brand))
    },[brand])

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getProducts(filter))
        dispatch(getFavorite())
    },[filter.brand])

    return (
        <nav className='header__menu'>
            <div className="container">
                <ul className="header__menu-list">
                    <li className="header__menu-item" >Чехлы
                        <ul className="header__subMenu-list">
                            {
                                brands.map((item) => (
                                <li key={item.id} onClick={() => {
                                    handleChange(item)
                                    navigate('/allPhone')
                                }} className={`header__subMenu-item ${filter.brand === item ? 'active' : ''}`} >{item}</li>
                                ))
                            }
                        </ul>
                    </li>
                    {/*<SelectBrand/>*/}
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
                    <li className="header__menu-item">Нужна полная защита телефона?
                        <ul className="header__subMenu-list">
                            <li className="header__subMenu-item"><Link className='header__subMenu-link' to={'/go'}>Защитные стёкла на дисплей</Link></li>
                            <li className="header__subMenu-item"><Link className='header__subMenu-link' to={'/go'}>Защитные линзы на камеру</Link></li>
                            <li className="header__subMenu-item"><Link className='header__subMenu-link' to={'/go'}>Зарядные устройства 100% оригинал</Link></li>
                            <li className="header__subMenu-item"><Link className='header__subMenu-link' to={'/go'}>Бюджетные зарядные устройства</Link></li>
                        </ul>

                    </li>
                </ul>
            </div>
            
        </nav>
    );
};

export default HeaderMenu;