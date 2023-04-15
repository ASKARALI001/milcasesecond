import React from 'react';
import IphoneTitle from "../../components/IphoneTitle/IphoneTitle";
import IphoneMenu from "./IphoneMenu/IphoneMenu";
import IphoneTwo from "./IphoneTwo/IphoneTwo";
import IphoneProducts from "./IphoneProducts/IphoneProducts";

const Iphone = () => {
    return (
        <main className='main'>
            <IphoneTitle/>
            <IphoneMenu/>
           <div  className="container">
            <IphoneProducts/>
           </div>
        </main>
    );
};
export default Iphone;