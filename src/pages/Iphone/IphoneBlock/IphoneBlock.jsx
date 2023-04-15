import React, {useEffect} from 'react';
import IphoneBlockCard from "./IphoneBlockCard";
import IphoneBlockInfo from "./IphoneBlockInfo";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getOneProduct} from "../../../redux/reducers/product";
import {getFavorite} from "../../../redux/reducers/addFavorite";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import {changeTitle, getProducts} from "../../../redux/reducers/products";

const IphoneBlock = () => {

    const {data, status} = useSelector(state => state.persistedReducer.product)

    const  {favorites }  = useSelector((store) => store.persistedReducer.addFavorite)
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(getOneProduct(params.id))
        dispatch(getFavorite())
    },[])

    if (status === 'loading'){
        return 'loading'
    }
    return (
        <section className='iphone__block'>
            <div className="container">
                <Breadcrumbs/>
                <h2 className='iphone__block-title'>{data.subCategory} «{data.description}»</h2>
                <IphoneBlockCard onClick={() => dispatch(changeTitle(data.title))} favorites={favorites} data={data}/>
                <IphoneBlockInfo data={data}/>
            </div>
            
        </section>
    );
};

export default IphoneBlock;