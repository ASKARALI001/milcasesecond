import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";

const Slider = () => {


    return (
        <section className="slider">
            <Swiper
                speed={3000}
                autoplay={{
                    delay : 3000
                }}
                loop={true}
                modules={[Autoplay,Navigation]}
                navigation={true}
                className="mySwiper">
                <SwiperSlide>
                        <img className='slider__img' src="https://case-place.ru/upload/materials/Lovely.jpg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__image">
                        <img className='slider__img'
                             src="https://case-place.ru/upload/materials/e11255d81ba97fead5ec2ff7272a0361.png" alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__image">
                        <img className='slider__img' src="https://case-place.ru/upload/materials/Tablet_desktop.jpg"
                             alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__image">
                        <img className='slider__img'
                             src="https://case-place.ru/upload/materials/delivery-2500_70_per.jpg" alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__image">
                        <img className='slider__img' src="https://case-place.ru/upload/materials/Lovely.jpg" alt=""/>
                    </div>
                </SwiperSlide>

            </Swiper>


        </section>
    );
};

export default Slider;