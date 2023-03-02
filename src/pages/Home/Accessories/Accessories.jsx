import React from 'react';
import Title from "../../../components/Title/Title";
import { BsHeadphones, BsPhone } from 'react-icons/bs'
import { RiBattery2ChargeLine } from 'react-icons/ri'
import { MdCable } from 'react-icons/md'

const Accessories = ({title}) => {
    return (
        <section className='accessories'>
            <div className="container">
                <Title title='АКСЕССУАРЫ' style={{background: '#f1f1f1'}}/>
                <ul className='accessories__info'>
                    <li className='accessories__info-desc'><BsHeadphones className="accessories__info-icons"/>Чехлы для наушников</li>
                    <li className='accessories__info-desc'> <RiBattery2ChargeLine className="accessories__info-icons"/>Внешние аккумуляторы</li>
                    <li className='accessories__info-desc'><BsPhone className="accessories__info-icons"/>Защитные стекла</li>
                    <li className='accessories__info-desc'><MdCable className="accessories__info-icons"/>Кабели для зарядки телефона</li>
                </ul>
            </div>

        </section>
    );
};

export default Accessories;