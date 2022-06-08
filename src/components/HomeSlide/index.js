import React from 'react'
import './styles.css';
import {ContenedorSlide} from './HomeSlideElementos';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.css';


import SwiperCore, {
    Pagination,Autoplay
  } from 'swiper';

SwiperCore.use([Pagination,Autoplay])

const HomeSlide = () => {
    return (
    
        <ContenedorSlide>
                <Swiper id="SlideHome"
                        autoplay={{
                            delay: 5000
                        }}
                        pagination={{
                            "type": "progressbar"
                          }}
                        >
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                </Swiper>
        </ContenedorSlide>
    )
}

export default HomeSlide