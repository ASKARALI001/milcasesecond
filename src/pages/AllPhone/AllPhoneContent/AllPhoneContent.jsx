import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeBrand, changeSubCategory, changeTitle, getProducts} from "../../../redux/reducers/products";
import {useNavigate} from "react-router-dom";
import FavoriteCard from "../../Favorite/FavoriteCard";
import IphoneCard from "../../../components/IphoneCard/IphoneCard";



const menuData = [
    'СИЛИКОНОВЫЕ ЧЕХЛЫ',
    'ЖИДКИЕ ЧЕХЛЫ С БЛЕСТКАМИ',
    'ЧЕХЛЫ КНИЖКИ',
    'ЧЕХЛЫ PREMIUM',
    'ПЛАСТИКОВЫЕ ЧЕХЛЫ',
    'ПРОТИВОУДАРНЫЕ ЧЕХЛЫ',
    'МАТОВЫЕ СИЛИКОНОВЫЕ ЧЕХЛЫ'
]


const AllPhoneContent = () => {
    const {data, filter} = useSelector((store) => store.persistedReducer.products)


    const dispatch = useDispatch()

    const [category, setCategory] = useState(filter.subCategory || '')
    const newAccess = {}
    const res = data.filter(({title}) => (!newAccess[title] && (newAccess[title] = 1)))


    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getProducts(filter))
    }, [filter.subCategory, category])

    return (
        <section className='allPhone__content'>
            <div className="container">

                <div className='allPhone__content-block'>
                    <div className='allPhone__content-box'>
                        <h2 className='allPhone__content-title'>Выберите вашу модель телефона</h2>
                    </div>
                     <div className='allPhone__content-column'>
                        <ul className='allPhone__content-list'>
                            {
                                res.map((item) => (
                                    <li key={item.id}  onClick={() => {
                                        dispatch(changeTitle(item.title))
                                        navigate('/iphone')
                                    }}  className='allPhone__content-item'>{item.title}</li>
                                ))
                            }

                        </ul>
                        <ul className='allPhone__content-bottom'>

                            {
                                menuData.map((category) => (
                                    <li key={category.id} onClick={() =>{
                                        navigate('/iphone')
                                        dispatch(changeSubCategory(category))
                                    } } className='allPhone__content-row'>{category}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='allPhone__content-phone'>
                    <IphoneCard/>

                </div>
            </div>

        </section>
    );
};

export default AllPhoneContent;