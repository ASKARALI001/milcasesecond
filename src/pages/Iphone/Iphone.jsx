import React from 'react';
import Iphone__menu from "./IphoneMenu/IphoneMenu";
import Iphone__title from "../../components/IphoneTitle/IphoneTitle";
import Iphone__two from "./IphoneTwo/IphoneTwo";

const Iphone = () => {
    return (
        <main className='main'>
            <Iphone__title/>
            <Iphone__menu />
           <div  className="container">
            <Iphone__two/>

           </div>
        </main>
    );
};

export default Iphone;