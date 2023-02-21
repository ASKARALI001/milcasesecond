import React from 'react';
import Iphone__menu from "./Iphone__menu/Iphone__menu";
import Iphone__title from "../../components/Iphone__title/Iphone__title";
import Product from "../../components/Product/Product";
import Aside from "./Aside/Aside";
import IphoneProducts from "./Iphone__products/Iphone__products";
import Iphone__two from "./Iphone__two/Iphone__two";

const Iphone = () => {
    return (
        <main className='main'>
            <Iphone__title title={'Чехлы-книжки для iPhone XS (10S) из эко-кожи'}/>
            <Iphone__menu/>
           <div className="container">
            <Iphone__two/>

           </div>
        </main>
    );
};

export default Iphone;