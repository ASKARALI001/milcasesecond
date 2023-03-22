import React from 'react';
import Title from "../../components/Title/Title";
import AllPhoneContent from "./AllPhoneContent/AllPhoneContent";

const AllPhone = () => {
    return (
        <section className='allPhone'>
            <Title title={'Чехлы для Apple'}/>
            <AllPhoneContent/>

        </section>
    );
};

export default AllPhone;