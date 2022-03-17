import React, { useState } from "react";

// slider module import
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { my as ana } from "./mycode";
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
SwiperCore.use([Navigation, Pagination]);

function App() {
  const list = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  //call api
  const [imageList, setImageList] = useState(list);

  const loadImage = async () => {
    alert("Loading new image, same image load from api..")
    //call api here
    const imageFromApi = [
      "https://unsplash.com/photos/g-krQzQo9mI/download?ixid=MnwzMTEwNzF8MHwxfHNlYXJjaHwyfHxsb25kb258ZW58MHx8fHwxNjQ3NTM3MjM1",
      "https://unsplash.com/photos/mOEqOtmuPG8/download?ixid=MnwzMTEwNzF8MHwxfHNlYXJjaHw0fHxsb25kb258ZW58MHx8fHwxNjQ3NTM3MjM1",
      "https://unsplash.com/photos/Q6UehpkBSnQ/download?ixid=MnwzMTEwNzF8MHwxfHNlYXJjaHw1fHxsb25kb258ZW58MHx8fHwxNjQ3NTM3MjM1",
    ];

    setImageList([...imageList, ...imageFromApi]);
  };

  return (
    <div className="my-slider-wrapper">
      <Swiper
        effect={"panorama"}
        onSlideChange={(swiper) =>
          // swiper.isEnd ? loadImage() : "Image avaible"
          swiper.isEnd ? loadImage() : console.log(swiper.isEnd)
          // 
        }
        // loop={!0}
        // loopedSlides={10}
        // centeredSlides={!0}
        grabCursor={!0}
        modules={[ana, Pagination]}
        className="mySwiper panorama-slider"
        navigation={true}
        panorama={{
          depth: 150,
          rotate: 45,
        }}
        slidesPerView={1.5}
        breakpoints={{
          480: {
            slidesPerView: 2,
            panorama: {
              rotate: 35,
              depth: 150,
            },
          },
          640: {
            slidesPerView: 3,
            panorama: {
              rotate: 30,
              depth: 150,
            },
          },
          1024: {
            slidesPerView: 4,
            panorama: {
              rotate: 30,
              depth: 200,
            },
          },
          1200: {
            slidesPerView: 5,
            panorama: {
              rotate: 25,
              depth: 250,
            },
          },
        }}
      >
        <div className="swiper">
          {imageList.map((data, index) => (
            <SwiperSlide key={index}>
              <img className="slide-image" src={data} />
            </SwiperSlide>
          ))}{" "}
        </div>
      </Swiper>
    </div>
  );
}

export default App;
