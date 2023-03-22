import React from 'react';
import {useSelector} from "react-redux";

const IphoneTitle = ({title}) => {

    const  {data, filter }  = useSelector((store) => store.persistedReducer.products)
    return (
        <div className='iphone__bg'>
            <div className="container">
                <h2 className='iphone__bg-title'>{filter.subCategory } для iPhone XS (10S) из эко-кожи
                </h2>
            </div>

        </div>
    );
};

export default IphoneTitle;