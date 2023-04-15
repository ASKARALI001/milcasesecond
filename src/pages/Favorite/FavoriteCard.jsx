import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../redux/reducers/products";
import {MdFavorite, MdOutlineFavoriteBorder} from "react-icons/md";
import {deleteFavorite, favorite, getFavorite} from "../../redux/reducers/addFavorite";

const FavoriteCard = () => {
    const  {favorites }  = useSelector((store) => store.persistedReducer.addFavorite)


    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getFavorite())
    },[])
    return (
        <>
            {
                favorites.data.map((item) => (
                    <div key={item.id} className='favoriteCard'>
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
                    </div>
                ))
            }
        </>
    );
};

export default FavoriteCard;