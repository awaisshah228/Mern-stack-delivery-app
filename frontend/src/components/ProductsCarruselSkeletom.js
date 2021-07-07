import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

import {SkeletomItem} from './ProductsSectionSkeletom'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';
SwiperCore.use([Pagination,Navigation]);


export default function ProductsCarruselSkeletom(){

return(
  <>
    <Swiper slidesPerView={1} spaceBetween={20} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{
  "clickable": true
}} navigation={true} className="mySwiper"
breakpoints={{

    330: {
      width: 660,
      slidesPerView:2 ,
    },

    660: {
      width: 970,
      slidesPerView: 3,
    },
     970: {
      width: 1200,
      slidesPerView: 4,
    },

  }}
>

<SwiperSlide><SkeletomItem >
 </SkeletomItem></SwiperSlide><SwiperSlide><SkeletomItem >
 </SkeletomItem></SwiperSlide><SwiperSlide><SkeletomItem >
 </SkeletomItem></SwiperSlide><SwiperSlide><SkeletomItem >
 </SkeletomItem></SwiperSlide><SwiperSlide><SkeletomItem >
 </SkeletomItem></SwiperSlide><SwiperSlide><SkeletomItem >
 </SkeletomItem></SwiperSlide>


  </Swiper>
    </>
    )
}