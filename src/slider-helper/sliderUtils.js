
export  const settings = {
    effect:"panorama",
    grabCursor:true,
    navigation:true,
    slidesPerView:1.5,
    
    panorama:{
      depth: 150,
      rotate: 45,
    },
    breakpoints:{
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
    }
  }