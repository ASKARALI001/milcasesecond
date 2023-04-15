import React from 'react';
import Title from "../../components/Title/Title";
import IphoneCard from "../../components/IphoneCard/IphoneCard";
import FavoriteCard from "./FavoriteCard";

const Favorite = ({title}) => {
    return (
        <section className='favorite'>
            <div className="container">
                <Title title={'ИЗБРАННОЕ'}/>
                <div className="favorite__content">
                    <FavoriteCard/>

                </div>
            </div>

        </section>
    );
};

export default Favorite;