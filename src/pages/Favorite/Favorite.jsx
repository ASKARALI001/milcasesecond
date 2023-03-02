import React from 'react';
import Title from "../../components/Title/Title";
import IphoneCard from "../../components/Iphone__card/Iphone__card";

const Favorite = ({title}) => {
    return (
        <section className='favorite'>
            <div className="container">
                <Title title={'ИЗБРАННОЕ'}/>
                <div className="favorite__content">
                    <IphoneCard/>
                    <IphoneCard/>
                    <IphoneCard/>
                    <IphoneCard/>

                </div>
            </div>

        </section>
    );
};

export default Favorite;