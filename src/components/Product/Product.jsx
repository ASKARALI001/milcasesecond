import React from 'react';
import {MdOutlineFavoriteBorder, MdFavorite} from 'react-icons/md';
import {deleteFavorite, favorite} from "../../redux/reducers/addFavorite";
import {useDispatch, useSelector} from "react-redux";

const Product = ({item}) => {

    const  {favorites }  = useSelector((store) => store.persistedReducer.addFavorite)

    const dispatch = useDispatch()
    return (
            <div className="product__card">
                <div className="product__card-image">
                    {
                        favorites.data.filter((el) => el.id === item.id).length ? <MdFavorite onClick={() => dispatch(deleteFavorite(item.id))} className='product__card-icon'/>
                            : <MdOutlineFavoriteBorder onClick={() => dispatch(favorite(item.id))} className='product__card-icon prew'/>
                    }
                  <img className='product__card-img' src={item?.image[0]} alt=""/>
                </div>
                <div className="product__card-info">
                    <p className='product__card-desc'>{item?.description}</p>
                    <div className="product__card-text">
                        <p className='product__card-seel'>Цена:</p>
                        <p className='product__card-price'>{item?.price} сом</p>
                    </div>
                </div>
            </div>
    );
};

export default Product;