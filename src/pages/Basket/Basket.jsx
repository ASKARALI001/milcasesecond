import React from 'react';
import BasketCard from "../../components/BasketCard/BasketCard";
import Title from "../../components/Title/Title";
import Ordering from "./Ordering";
import {useSelector} from "react-redux";

const Basket = ({title}) => {
    const { basket } = useSelector((store) => store.persistedReducer.addFavorite)

    return (
        <section className='basket'>
            <div className="container">

                <Title title={'ОФОРМЛЕНИЕ ЗАКАЗА'}/>
                {
                    basket.dataLength ?
                    <>
                        <BasketCard/>
                        <Ordering/>
                    </> : <h2 className='basket__title'>В корзинe пусто</h2>
                }
            </div>
            
        </section>
    );
};

export default Basket;