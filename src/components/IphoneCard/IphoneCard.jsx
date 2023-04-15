import React, {useEffect} from 'react';
import {MdFavorite, MdOutlineFavoriteBorder} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {changeTitle, getProducts} from "../../redux/reducers/products";
import {deleteFavorite, favorite, getFavorite} from "../../redux/reducers/addFavorite";
import {Link,} from "react-router-dom";

const IphoneCard = () => {

    const  {data, filter }  = useSelector((store) => store.persistedReducer.products)
    const  {favorites }  = useSelector((store) => store.persistedReducer.addFavorite)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts(filter))
        dispatch(getFavorite())
    },[filter.brand, filter.limit, filter.title, filter.subCategory])
    return (
        <>
            {
                data.map((item) => (
                    <Link to={`/iphoneBlock/${item.id}`} onClick={() => dispatch(changeTitle(item.title))} className='iphone__card' key={item.id}>
                            <div className="product__card-content">

                                {
                                    favorites.data.filter((el) => el.id === item.id).length ? <MdFavorite onClick={() => dispatch(deleteFavorite(item.id))} className='product__card-icon'/>
                                        : <MdOutlineFavoriteBorder onClick={() => dispatch(favorite(item.id))} className='product__card-icon prew'/>
                                }

                                <div className='product__card-image'>
                                    <img className='product__card-img' src={item.image[0]} alt=""/>
                                </div>
                            </div>
                            <div className="product__card-info">
                                <p className='product__card-desc'>{item.description}</p>
                                <div className="product__card-text">
                                    <p className='product__card-seel'>Цена:</p>
                                    <p className='product__card-price'>{item.price} сом</p>
                                </div>
                            </div>

                    </Link>

                ))
            }
        </>
    );
};

export default IphoneCard;