import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "../../utils/axios";
import {useDispatch} from "react-redux";
import {changeSubCategory} from "../../redux/reducers/products";

const Card = ({category}) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    return (
        <div className="all-products__card" onClick={() => {
            navigate('/iphone')
            dispatch(changeSubCategory(category.category))
        }}>
            <div className="all-products__card-info">
                <p className='all-products__card-desc'>{category.category}</p>
                <div className="all-products__card-svg">
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 1L7.5 8L0.500001 15" stroke="#767ab9"></path>
                    </svg>
                </div>
            </div>
            <div className="all-products__card-imag">
                <img className='all-products__card-img' src={category.subCategory} alt=""/>
            </div>
        </div>

    );
};

export default Card;