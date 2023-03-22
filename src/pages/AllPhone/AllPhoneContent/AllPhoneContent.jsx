import React from 'react';
import {useSelector} from "react-redux";




const AllPhoneContent = () => {

    const {data} = useSelector((store) => store.persistedReducer.products)
    return (
        <section className='allPhone__content'>
            <div className="container">
                <div className='allPhone__content-block'>
                    <div className='allPhone__content-box'>
                        <h2 className='allPhone__content-title'>Выберите вашу модель телефона</h2>
                    </div>
                     <div className='allPhone__content-column'>
                        <ul className='allPhone__content-list'>
                            {
                                data.map((item) => (
                                    <li key={item.id} className='allPhone__content-item'>{item.title}</li>
                                ))
                            }

                        </ul>
                        <ul className='allPhone__content-bottom'>

                            {
                                data.map((item) => (
                                    <li key={item.id} className='allPhone__content-row'>{item.subCategory}</li>
                                ))
                            }
                        </ul>
                    </div>



                </div>
            </div>

        </section>
    );
};

export default AllPhoneContent;