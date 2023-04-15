import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import {useNavigate} from "react-router-dom";
import axios from "../../../utils/axios";

const Slider = () => {


    const [advertising, setAdvertising] = useState([])

    useEffect(() => {
        axios('/advertising')
            .then(({data}) => setAdvertising(data))
            .catch((err) => console.log(err))
    },[])

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        }
    };
    const navigate = useNavigate()

    return (
        <section className="slider">
            <Swiper
                speed={3000}
                autoplay={{
                    delay : 3000
                }}
                loop={true}
                pagination={pagination}
                modules={[Autoplay,Navigation,Pagination]}
                navigation={true}
                className="mySwiper">
                {
                    advertising.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img className='slider__img' src={item} alt=""/>
                            <button onClick={() => navigate('allPhone')} className='slider__btn'>Выбери свою модель</button>
                        </SwiperSlide>
                    ))
                }


            </Swiper>


        </section>
    );
};

export default Slider;