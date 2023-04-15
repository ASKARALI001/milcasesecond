import React from 'react';
import {useSelector} from "react-redux";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const IphoneTitle = ({title}) => {

    const  {data, filter }  = useSelector((store) => store.persistedReducer.products)
    return (
        <div className='iphone__bg'>
            <div className="container">
                <Breadcrumbs/>
                <h2 className='iphone__bg-title'>{filter.subCategory } для {filter.brand}
                </h2>
            </div>

        </div>
    );
};

export default IphoneTitle;