import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay} from "swiper";
import Product from "../Product/Product";
import Title from "../Title/Title";

const Products = ({title}) => {
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
                  <SwiperSlide>
                  <Product className='product__card'/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <Product className='product__card'/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <Product className='product__card'/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <Product className='product__card'/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <Product className='product__card'/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <Product className='product__card'/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <Product className='product__card'/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <Product className='product__card'/>
                  </SwiperSlide>
                  <SwiperSlide>
                      <Product className='product__card'/>
                  </SwiperSlide>



              </Swiper>
          </div>

        </section>
    );
};

export default Products;