import React from 'react';
import {MdOutlineFavoriteBorder, MdFavorite} from 'react-icons/md';
import Phone from '../../assets/image/phone5.JPG'

const Product = () => {
    return (
            <div className="product__card">
                <div className="product__card-image">
                    <MdOutlineFavoriteBorder className='product__card-icon prew'/>
                    <MdFavorite className='product__card-icon'/>
                    <img className='product__card-img' src={Phone} alt=""/>
                </div>
                <div className="product__card-info">
                    <p className='product__card-desc'>Силиконовый чехол Пионы New</p>
                    <div className="product__card-text">
                        <p className='product__card-seel'>Цена:</p>
                        <p className='product__card-price'>699 сом</p>
                    </div>
                </div>
            </div>
    );
};

export default Product;