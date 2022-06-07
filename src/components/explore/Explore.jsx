import React, { useRef, useState } from "react";
import slideData from "./dataSlider"
import './explore.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
const Explore = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
 
  return (
    <section className='explore-container'>
      
      <h2 className='exploreTitle title'>Explore</h2>

  <Swiper
        style={{
          "--swiper-navigation-color": "#007aff",
          "--swiper-pagination-color": "#fff",
         
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
  > 
      {slideData.map((slide, index ) => {
        return (
          <SwiperSlide
          className={"exploreImgContainer " + slide.id}
          key={index}
        >
            <img src={slide.url} alt={slide.id} className={`exploreImg ` + slide.id} />
        </SwiperSlide>
        )
      })}
 
  </Swiper>
  <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper1"
      >
      {slideData.map((slide, index ) => {
        return (
          <SwiperSlide
          className={"exploreImgContainer " + slide.id}
          key={index}
        >
            <img src={slide.url} alt={slide.id} className={`exploreImg ` + slide.id} />
        </SwiperSlide>
        )
      })}

  </Swiper>
    </section>
  )
}

export default Explore  