import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import images

import bannerImg1 from '../../assets/Img/FastrebootImg/banner11.jpg'
import bannerImg2 from '../../assets/Img/FastrebootImg/banner12.jpg'
import bannerImg3 from '../../assets/Img/FastrebootImg/banner14.jpg'

// import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';


const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper h-80 w-auto mt-5"
      >
        <SwiperSlide>
          <img src={bannerImg3} className=' w-full h-full object-fill' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerImg2} className=' w-full h-full object-fill'  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerImg1} className=' w-full h-full object-fill' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner
