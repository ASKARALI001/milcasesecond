import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../../redux/reducers/products";
import Card from "../../../components/Card/Card";
import {Link} from "react-router-dom";

const AllProducts = () => {


    const  { data }  = useSelector((store) => store.persistedReducer.products)
    let a = []
    let b = []
    data.map(item => a = [...a,item.subCategory])
    a.map(item => b.includes(item) ? "" : b = [...b,item])

    console.log(b)
    return (
        <section className='all-products'>
            <div className="container">
                <div className="all-products__content">
                    {
                        data.map((item) => (
                            <Link  to={'/iphone'}>
                                <div className="all-products__card-info">
                                    <p className='all-products__card-desc'>{item}</p>
                                    <div className="all-products__card-svg">
                                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.5 1L7.5 8L0.500001 15" stroke="#767ab9"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="all-products__card-imag">
                                    <img className='all-products__card-img' src={item.subCategoryImg} alt=""/>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>

        </section>
    );
};

export default AllProducts;