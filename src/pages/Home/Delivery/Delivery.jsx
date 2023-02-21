import React from 'react';
import Title from "../../../components/Title/Title";
import {GiCardboardBoxClosed} from 'react-icons/gi';
import {FaTruck} from 'react-icons/fa'
import {BsCreditCard2BackFill} from 'react-icons/bs'
import {FaMoneyBillWave} from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'

const Delivery = ({title}) => {
    return (
        <section className="delivery">
            <div className="container">
                <div className="delivery__top">
                    <Title title='ДОСТАВКА И ОПЛАТА'/>
                    <div className="delivery__icon">
                        <HiLocationMarker className=" delivery__span"></HiLocationMarker>
                        <p className="delivery__top-desc">Бишкек</p>
                    </div>
                </div>
                <div className="delivery__bottom">
                    <div className="delivery__bottom-info">
                        <GiCardboardBoxClosed className="delivery__bottom-span"></GiCardboardBoxClosed>
                        <div className="delivery__bottom-text">
                            <p className="delivery__bottom-desc">ПУНКТЫ <br/> САМОВЫВОЗА</p>
                            <p className="delivery__bottom-lit">
                                Будем ждать вас
                            </p>
                        </div>
                    </div>
                    <div className="delivery__bottom-info">
                        <FaTruck className=" delivery__bottom-span"></FaTruck>
                        <div className="delivery__bottom-text">
                            <p className="delivery__bottom-desc">ДОСТАВКА <br/> КУРЬЕРОМ</p>
                            <p className="delivery__bottom-lit">ОТ 299 сом
                                30-60 мин</p>
                        </div>
                    </div>
                    <div className="delivery__bottom-info">
                        <BsCreditCard2BackFill className="delivery__bottom-span"></BsCreditCard2BackFill>
                        <div className="delivery__bottom-text">
                            <p className="delivery__bottom-desc">ОПЛАТА КАРТОЙ <br/> ОНЛАЙН</p>
                            <p className="delivery__bottom-lit">СКИДКА 3%</p>
                        </div>
                    </div>
                    <div className="delivery__bottom-info">
                        <FaMoneyBillWave className=" delivery__bottom-span"></FaMoneyBillWave>
                        <div className="delivery__bottom-text">
                            <p className="delivery__bottom-desc">ОПЛАТА ПРИ <br/> ПОЛУЧЕНИИ</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

           );
};

export default Delivery;