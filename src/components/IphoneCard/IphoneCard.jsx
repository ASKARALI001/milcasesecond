import React, {useEffect} from 'react';
import {MdFavorite, MdOutlineFavoriteBorder} from "react-icons/md";
import Phone from "../../assets/image/phone5.JPG";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../redux/reducers/products";

const IphoneCard = () => {

    const  {data, filter }  = useSelector((store) => store.persistedReducer.products)


    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getProducts(filter))
    },[filter.brand, filter.limit])
    return (
        <>
            {
                data.map((item) => (
                    <div key={item.id} className='iphone__card'>
                        <div className="product__card-image">
                            <MdOutlineFavoriteBorder className='product__card-icon prew'/>
                            <MdFavorite className='product__card-icon'/>
                            <img className='product__card-img' src={item.image[0]} alt=""/>
                            <p>{item.brand}</p>
                            <p>{item.subCategory}</p>
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

export default IphoneCard;