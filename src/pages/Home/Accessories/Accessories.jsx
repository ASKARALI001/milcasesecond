import React from 'react';
import Title from "../../../components/Title/Title";
import { BsHeadphones, BsPhone } from 'react-icons/bs'
import { RiBattery2ChargeLine } from 'react-icons/ri'
import { MdCable } from 'react-icons/md'
import {useSelector} from "react-redux";

const Accessories = ({title}) => {

    const {data} = useSelector((store) => store.persistedReducer.products)
    const newAccess = {}
    const res = data.filter(({category}) => (!newAccess[category] && (newAccess[category] = 1)))
    return (
        <section className='accessories'>
            <div className="container">
                <Title title='АКСЕССУАРЫ' style={{background: '#f1f1f1'}}/>
                <ul className='accessories__info'>
                    {
                        res.map((item) => (
                            <li key={item.id} className='accessories__info-desc'>{item.category}</li>

                        ))
                    }
                </ul>
            </div>

        </section>
    );
};

export default Accessories;