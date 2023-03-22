import React, {useEffect} from 'react';
import Product from "../../../components/Product/Product";
import IphoneCard from "../../../components/IphoneCard/IphoneCard";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../../redux/reducers/products";



const IphoneProducts = () => {

    const  {status, error, data }  = useSelector((store) => store.persistedReducer.products)


    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getProducts())
    },[])

    return (
        <div className='iphone__products'>
            <IphoneCard/>
        </div>
    );
};

export default IphoneProducts;