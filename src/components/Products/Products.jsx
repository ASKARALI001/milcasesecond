import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay} from "swiper";
import Product from "../Product/Product";
import Title from "../Title/Title";
import {useSelector} from "react-redux";

const Products = ({title}) => {


    const { data } = useSelector((store) => store.persistedReducer.products)
    return (
        <section className='products'>

          <div className="container">
              <Title title={title}/>
              <Swiper
                  slidesPerView={4}
                  spaceBetween={25}

                  autoplay={{
                      delay : 3000
                  }}
                  loop={true}
                  speed={3000}
                  modules={[Autoplay]}
                  className="mySwiper product__padding"
              >
                  {
                      data.length && data.map((item) => (
                          <SwiperSlide>
                              <Product item={item} className='product__card'/>
                          </SwiperSlide>
                      ))
                  }
              </Swiper>
          </div>

        </section>
    );
};

export default Products;