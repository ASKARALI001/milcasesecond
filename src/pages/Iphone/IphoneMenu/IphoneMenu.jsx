import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { changeSubCategory, getProducts} from "../../../redux/reducers/products";

const menuData = [
    'СИЛИКОНОВЫЕ ЧЕХЛЫ',
    'ЖИДКИЕ ЧЕХЛЫ С БЛЕСТКАМИ',
    'ЧЕХЛЫ КНИЖКИ',
    'ЧЕХЛЫ PREMIUM',
    'ПЛАСТИКОВЫЕ ЧЕХЛЫ'
]

const IphoneMenu = () => {

    const {filter, data} = useSelector((store) => store.persistedReducer.products)

    const dispatch = useDispatch()

    const [category, setCategory] = useState(filter.subCategory || '')

    const handleChange = (val) => {
        setCategory(val)
    }

    useEffect(() => {
        dispatch(changeSubCategory(category))
    },[category])

    useEffect(() => {
        dispatch(getProducts(filter))
    }, [filter.subCategory, category])




    return (
        <section className='iphone__menu'>
            <div className="container">
                <ul className='iphone__menu-item'>
                    {
                        menuData.map((category) => (
                            <li onClick={() => handleChange(category)}  className={`iphone__menu-list ${filter.subCategory === category ? 'active' : ''}`}>
                                {category}
                            </li >
                        ))
                    }
                </ul>

            </div>
        </section>
    );
};

export default IphoneMenu;