import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "../../utils/axios";

const Card = ({item}) => {

    return (
            <div className="all-products__card">
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
            </div>

    );
};

export default Card;