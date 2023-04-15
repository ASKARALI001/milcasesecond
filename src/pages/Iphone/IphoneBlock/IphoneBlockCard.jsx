import React from 'react';
import {MdFavorite, MdOutlineFavoriteBorder} from "react-icons/md";
import {GiCardboardBoxClosed} from "react-icons/gi";
import {FaMoneyBillWave, FaTruck} from "react-icons/fa";
import {BsCreditCard2BackFill} from "react-icons/bs";
import {deleteFavorite, favorite, setBasket} from "../../../redux/reducers/addFavorite";
import {useDispatch} from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";


const IphoneBlockCard = ({data, favorites}) => {

    const dispatch = useDispatch()

    return (
        <section className='iphone__blockCard'>
            <div className='iphone__blockCard-row'>
                <div className='iphone__blockCard-images'>
                    <div>
                        {
                            favorites.data.filter((el) => el.id === data.id).length ? <MdFavorite onClick={() => dispatch(deleteFavorite(data.id))} className='iphone__blockCard-icon'/>
                                : <MdOutlineFavoriteBorder onClick={() => dispatch(favorite(data.id))} className='iphone__blockCard-icon'/>
                        }
                    </div>

                    <Swiper
                        spaceBetween={5}
                        slidesPerView={1}
                        autoplay={{
                            delay : 3000
                        }}
                        loop={true}
                        speed={3000}
                        modules={[Autoplay,Navigation]}
                        navigation={true}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            data.image?.map((item) => (
                                <SwiperSlide> <img key={item.id} src={item} alt=""/></SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>
                <div className='iphone__blockCard-right'>
                    <div className='iphone__blockCard-info'>
                        <div className='iphone__blockCard-prices'>
                            <div>
                                <p className='iphone__blockCard-text'>Цена :</p>
                                <p className='iphone__blockCard-price'>за один : {data.price}</p>
                                <p className='iphone__blockCard-price'>за троих : 1500</p>
                            </div>
                            <div className='iphone__blockCard-favorite'>
                                {
                                    favorites.data.filter((el) => el.id === data.id).length ? <MdFavorite onClick={() => dispatch(deleteFavorite(data.id))} className='iphone__blockCard-icons'/>
                                        : <MdOutlineFavoriteBorder onClick={() => dispatch(favorite(data.id))} className='iphone__blockCard-icons'/>
                                }
                            </div>
                            <div>
                                <button  onClick={() => dispatch(setBasket(data.id))} className='iphone__blockCard-btn'>В КОРЗИНУ</button>

                            </div>

                        </div>
                        <div className="iphone__blockCard-text">
                            <div className='iphone__blockCard-second'>
                                <p className='iphone__blockInfo-desc'>Модель телефона:</p>
                                <p className='iphone__blockCard-descrip'>{data.title}</p>
                            </div>
                            <div className='iphone__blockCard-second'>
                                <p className='iphone__blockInfo-desc'>Коллекция:</p>
                                <p className='iphone__blockCard-descrip'>{data.description}</p>
                            </div>
                            <div className='iphone__blockCard-second'>
                                <p className='iphone__blockInfo-desc'>Материал:</p>
                                <p className='iphone__blockCard-descrip'>{data.subCategory}</p>
                            </div>



                        </div>
                        <div className='iphone__blockCard-delivery'>
                            <div className='iphone__blockCard-deliveryInfo'>
                                <GiCardboardBoxClosed className='iphone__blockCard-span'></GiCardboardBoxClosed>
                                <div className="iphone__blockCard-text">
                                    <p className="iphone__blockCard-desc">ПУНКТЫ <br/> САМОВЫВОЗА</p>
                                    <p className="iphone__blockCard-lit">
                                        Будем ждать вас
                                    </p>
                                </div>
                            </div>
                            <div className="iphone__blockCard-deliveryInfo">
                                <FaTruck className="iphone__blockCard-span"></FaTruck>
                                <div className="iphone__blockCard-text">
                                    <p className="iphone__blockCard-desc">ДОСТАВКА <br/> КУРЬЕРОМ</p>
                                    <p className="iphone__blockCard-lit">ОТ 299 сом
                                        30-60 мин</p>
                                </div>
                            </div>
                            <div className="iphone__blockCard-deliveryInfo">
                                <BsCreditCard2BackFill className="iphone__blockCard-span"></BsCreditCard2BackFill>
                                <div className="iphone__blockCard-text">
                                    <p className="iphone__blockCard-desc">ОПЛАТА КАРТОЙ <br/> ОНЛАЙН</p>
                                    <p className="iphone__blockCard-lit">СКИДКА 3%</p>
                                </div>
                            </div>
                            <div className="iphone__blockCard-deliveryInfo">
                                <FaMoneyBillWave className="iphone__blockCard-span"></FaMoneyBillWave>
                                <div className="iphone__blockCard-text">
                                    <p className="iphone__blockCard-desc">ОПЛАТА ПРИ <br/> ПОЛУЧЕНИИ</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default IphoneBlockCard;