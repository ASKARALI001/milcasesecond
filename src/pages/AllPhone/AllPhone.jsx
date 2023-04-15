import React from 'react';
import Title from "../../components/Title/Title";
import AllPhoneContent from "./AllPhoneContent/AllPhoneContent";
import IphoneCard from "../../components/IphoneCard/IphoneCard";
import {useParams} from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import {useSelector} from "react-redux";

const AllPhone = () => {

    const  {filter} = useSelector((store) => store.persistedReducer.products)

    return (
        <section className='allPhone'>
            <Breadcrumbs/>
            <Title title={`Чехлы для ${filter.brand}`}/>
            <AllPhoneContent/>


        </section>
    );
};

export default AllPhone;