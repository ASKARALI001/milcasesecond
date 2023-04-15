import React, {useEffect} from 'react';
import IphoneCard from "../../../components/IphoneCard/IphoneCard";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../../redux/reducers/products";
import {getFavorite} from "../../../redux/reducers/addFavorite";



const IphoneProducts = () => {

    const  {filter}  = useSelector((store) => store.persistedReducer.products)


    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getProducts(filter))
        dispatch(getFavorite())
    },[filter.subCategory, filter.order])

    return (
        <div className='iphone__products'>
            <IphoneCard/>
        </div>
    );
};

export default IphoneProducts;