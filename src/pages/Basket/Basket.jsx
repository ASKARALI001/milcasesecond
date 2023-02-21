import React from 'react';
import BasketCard from "../../components/Basket__card/Basket__card";
import Title from "../../components/Title/Title";

const Basket = ({title}) => {
    return (
        <section className='basket'>
            <div className="container">
                <Title title={'ОФОРМЛЕНИЕ ЗАКАЗА'}/>
                <BasketCard/>
            </div>
            
        </section>
    );
};

export default Basket;