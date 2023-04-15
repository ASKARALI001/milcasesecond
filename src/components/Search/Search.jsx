import React from 'react';
import {MdFavorite, MdOutlineFavoriteBorder} from "react-icons/md";
import {deleteFavorite, favorite} from "../../redux/reducers/addFavorite";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {changeTitle} from "../../redux/reducers/products";

const Search = () => {
    const {data, filter} = useSelector((store) => store.persistedReducer.products)
    const {favorites} = useSelector((store) => store.persistedReducer.addFavorite)
    const dispatch = useDispatch()

    return (
        <div className='search'>
            {
                data.map((item) => (
                    <Link to={`/iphoneBlock/${item.id}`} onClick={() => dispatch(changeTitle(item.title))} className='iphone__card' key={item.id}>
                        <div className="search__card-content">

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

        </div>
    );
};

export default Search;