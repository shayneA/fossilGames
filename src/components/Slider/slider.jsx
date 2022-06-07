import "./slider.css";
import dataSlider from "./dataSlider"
//import LeftArrow from "./icons/leftIcon"
//import RightArrow from "./icons/rightIcon"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = ({ slides }) => {

  const swiperContainerStyle = {
    width: "100%",
    height: "60vh",
    display: "flex",
    margin: "auto",
  };

  return (
    <> 
    <p className='slider-gap'></p>
    <Swiper 
            autoplay={{
             delay: 3500,
             disableOnInteraction: false,
            }}
            style={swiperContainerStyle}
            className="mySwiperr"
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]} > 
      
      {dataSlider.map((slide, index ) => {
        return (
          <SwiperSlide
          className={index}
          key={index}
        >
  
           <img src={slide.url} alt={slide.id} className='image' />
         
          
   
            <p className='name'>{slide.name}</p>
        </SwiperSlide>
        )
      })}
      
        
    </Swiper>
    <p className='slider-gap'></p>
    </>
  )
}

export default Slider