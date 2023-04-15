import React, {useEffect} from 'react';
import {Autoplay, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {useDispatch, useSelector} from "react-redux";
import {getCommit} from "../../../redux/reducers/commit";
import Title from "../../../components/Title/Title";

const HomeCommit = () => {


    const {data} = useSelector((store) => store.persistedReducer.commit)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCommit())
    },[])

    return (
       <section className='commit'>
           <Title title={'У НАС УЖЕ КУПИЛИ ЧЕХЛЫ 1 304 312 ЧЕЛОВЕК!'}/>

           <div className="container">
               <Swiper
                   spaceBetween={15}
                   slidesPerView={5}
                   autoplay={{
                       delay: 3000
                   }}
                   loop={true}
                   speed={4000}
                   modules={[Autoplay, Navigation]}
                   navigation={true}
               >
                   {
                       data.map((item) => (
                           <SwiperSlide key={item.id}>
                               <div >
                                   <img src={item.image} alt=""/>
                               </div>
                           </SwiperSlide>
                       ))
                   }
               </Swiper>
           </div>
       </section>
    );
};

export default HomeCommit;