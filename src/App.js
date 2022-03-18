import React, { useState } from "react";

// slider module import
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Manipulation } from "swiper";
import { my as ana } from "./slider-helper/sliderCore";
import { settings } from "./slider-helper/sliderUtils";
import "swiper/css/navigation";

//image import
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";
import img9 from "./images/9.jpg";
import img10 from "./images/10.jpg";

//slider module use
SwiperCore.use([Navigation, Pagination, Manipulation]);

//this image source will come from your api
const imageFromApi = [
  "https://unsplash.com/photos/g-krQzQo9mI/download?ixid=MnwzMTEwNzF8MHwxfHNlYXJjaHwyfHxsb25kb258ZW58MHx8fHwxNjQ3NTM3MjM1",
  "https://unsplash.com/photos/mOEqOtmuPG8/download?ixid=MnwzMTEwNzF8MHwxfHNlYXJjaHw0fHxsb25kb258ZW58MHx8fHwxNjQ3NTM3MjM1",
  "https://unsplash.com/photos/Q6UehpkBSnQ/download?ixid=MnwzMTEwNzF8MHwxfHNlYXJjaHw1fHxsb25kb258ZW58MHx8fHwxNjQ3NTM3MjM1",
];

function App() {
  const list = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const [imageList, setImageList] = useState(list);

  const [swiperRef, setSwiperRef] = useState(null);
  const loadImage = async () => {
    alert("Loading new image, same image load from api..");
    //call api here
    setImageList([...imageList, ...imageFromApi]);
  };

  const addpend = () => {
    //call api here
    alert("Loading new image, same image load from api..");
    const appendedList = [];
    for (let i = 0; i < imageFromApi.length; i++) {
      appendedList.push(
        `<div class="swiper-slide"> <img class='slide-image' src= ${imageFromApi[i]} /> </div>`
      );
    }
    swiperRef.prependSlide(appendedList);
  };

  return (
    <div className="my-slider-wrapper">
      <Swiper
        {...settings}
        onSlideChange={(swiper) => (swiper.isBeginning ? addpend() : null)}
        onReachEnd={() => loadImage()}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        modules={[ana, Pagination]}
        className="mySwiper panorama-slider"
      >
        <div className="swiper">
          {imageList.map((data, index) => (
            <SwiperSlide key={index}>
              <img className="slide-image" src={data} alt="" />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default App;
