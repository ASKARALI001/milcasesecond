import React from 'react';
import {useSelector} from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";

const IphoneBlockCommit = () => {

    const {data} = useSelector((store) => store.persistedReducer.commit)

    console.log(data)
    return (
        <>
            <Swiper
                spaceBetween={15}
                slidesPerView={2}
                autoplay={{
                    delay: 3000
                }}
                loop={true}
                speed={4000}
                modules={[Autoplay, Navigation]}
                navigation={true}
                onSwiper={(swiper) => console.log(swiper)}
                className='iphone__blockCommit-width'
            >
                {
                    data.map((item) => (
                        <div>
                        <SwiperSlide>
                                <div className='iphone__blockInfo'>
                                    <div className='iphone__blockInfo-image'>
                                        <img src={item.image}
                                             alt=""/>
                                        <p className='iphone__blockInfo-ops'>{item.text}</p>
                                    </div>
                                </div>
                        </SwiperSlide>
                        </div>
                    ))
                }

            </Swiper>

        </>
    );
};

export default IphoneBlockCommit;