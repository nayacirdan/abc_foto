import React, {useState, useEffect} from 'react';
import Swiper from 'react-id-swiper';

import "swiper/css/swiper.css";
import './PromotionsAndOffers.scss'


const PromotionsAndOffers = () => {
  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  };

  const thumbnailSwiperParams = {
    getSwiper: thumbnailSwiper,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
  };

  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);

  return (
    <div>
      <div className="container">
        <Swiper {...gallerySwiperParams}>
          <div className="swiper-slide">
            <div className="promotions-slides">
              <div className="promotions-slides__first-slide-photo">
                <img src="/images/promotions/prom1.png" alt="img"/>
              </div>
              <div className="promotions-slides__first-slide-text">
                <p className="promotions-slides__first-slide-text_name">
                  <span className="promotions-slides__first-slide-text_name-bold">Canon EOS 5D Mark IV</span> <br/>kit 24-70 f/4L IS USM
                </p>
                <p className="promotions-slides__first-slide-text_price">
                  <span className="promotions-slides__first-slide-text_price-past">118 161<span className="promotions-slides__first-slide-text_price-uah-past">грн</span></span></p>
                <p className="promotions-slides__first-slide-text_price-actual">77 299<span className="promotions-slides__first-slide-text_price-uah">грн</span></p>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="promotions-slides">
              <div className="promotions-slides__first-slide-photo">
                <img src="/images/promotions/prom1.png" alt="img"/>
              </div>
              <div className="promotions-slides__first-slide-text">
                <p className="promotions-slides__first-slide-text_name">
                  <span className="promotions-slides__first-slide-text_name-bold">Canon EOS 5D Mark IV</span> <br/>kit 24-70 f/4L IS USM
                </p>
                <p className="promotions-slides__first-slide-text_price">
                  <span className="promotions-slides__first-slide-text_price-past">118 161<span className="promotions-slides__first-slide-text_price-uah-past">грн</span></span></p>
                <p className="promotions-slides__first-slide-text_price-actual">77 299<span className="promotions-slides__first-slide-text_price-uah">грн</span></p>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="promotions-slides">
              <div className="promotions-slides__first-slide-photo">
                <img src="/images/promotions/prom1.png" alt="img"/>
              </div>
              <div className="promotions-slides__first-slide-text">
                <p className="promotions-slides__first-slide-text_name">
                  <span className="promotions-slides__first-slide-text_name-bold">Canon EOS 5D Mark IV</span> <br/>kit 24-70 f/4L IS USM
                </p>
                <p className="promotions-slides__first-slide-text_price">
                  <span className="promotions-slides__first-slide-text_price-past">118 161<span className="promotions-slides__first-slide-text_price-uah-past">грн</span></span></p>
                <p className="promotions-slides__first-slide-text_price-actual">77 299<span className="promotions-slides__first-slide-text_price-uah">грн</span></p>
              </div>
            </div>
          </div>
        </Swiper>
        <Swiper {...thumbnailSwiperParams}>
          <div className="swiper-slide">
            <div className="promotions-slides first-minislide_width">
              <div className="promotions-slides__first-slide-photo first-minislide_ml">
                <img src="/images/promotions/mini-slide1.jpg" alt="img"/>
              </div>
              <div className="promotions-slides__first-slide-text first-minislide_mt">
                <p className="promotions-slides__first-slide-text_name first-minislide_name">
                  <span className="promotions-slides__first-slide-text_name-bold">Canon EOS 5D Mark IV</span> <br/>kit 24-70 f/4L IS USM
                </p>
                <p className="promotions-slides__first-slide-text_price first-minislide_mt">
                  <span className="promotions-slides__first-slide-text_price-past first-minislide_price-past">118 161<span className="promotions-slides__first-slide-text_price-uah-past">грн</span></span></p>
                <p className="promotions-slides__first-slide-text_price-actual first-minislide_price-actual">77 299<span className="promotions-slides__first-slide-text_price-uah">грн</span></p>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="promotions-slides first-minislide_width">
              <div className="promotions-slides__first-slide-photo first-minislide_ml">
                <img src="/images/promotions/mini-slide1.jpg" alt="img"/>
              </div>
              <div className="promotions-slides__first-slide-text first-minislide_mt">
                <p className="promotions-slides__first-slide-text_name first-minislide_name">
                  <span className="promotions-slides__first-slide-text_name-bold">Canon EOS 5D Mark IV</span> <br/>kit 24-70 f/4L IS USM
                </p>
                <p className="promotions-slides__first-slide-text_price first-minislide_mt">
                  <span className="promotions-slides__first-slide-text_price-past first-minislide_price-past">118 161<span className="promotions-slides__first-slide-text_price-uah-past">грн</span></span></p>
                <p className="promotions-slides__first-slide-text_price-actual first-minislide_price-actual">77 299<span className="promotions-slides__first-slide-text_price-uah">грн</span></p>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="promotions-slides first-minislide_width">
              <div className="promotions-slides__first-slide-photo first-minislide_ml">
                <img src="/images/promotions/mini-slide1.jpg" alt="img"/>
              </div>
              <div className="promotions-slides__first-slide-text first-minislide_mt">
                <p className="promotions-slides__first-slide-text_name first-minislide_name">
                  <span className="promotions-slides__first-slide-text_name-bold">Canon EOS 5D Mark IV</span> <br/>kit 24-70 f/4L IS USM
                </p>
                <p className="promotions-slides__first-slide-text_price first-minislide_mt">
                  <span className="promotions-slides__first-slide-text_price-past first-minislide_price-past">118 161<span className="promotions-slides__first-slide-text_price-uah-past">грн</span></span></p>
                <p className="promotions-slides__first-slide-text_price-actual first-minislide_price-actual">77 299<span className="promotions-slides__first-slide-text_price-uah">грн</span></p>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default PromotionsAndOffers;


// import React from "react";
// import Swiper from "react-id-swiper";
// import "swiper/css/swiper.css";
// import "./PromotionsAndOffers.scss";
//
//
// const PromotionsAndOffers = () => {
//   let galleryThumbs = new Swiper('.gallery-thumbs', {
//     spaceBetween: 4,
//     slidesPerView: 5,
//     freeMode: true,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
//   });
//   let galleryTop = new Swiper('.gallery-top', {
//     spaceBetween: 4,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     thumbs: {
//       swiper: galleryThumbs
//
//     }
//
//   });
//
//   return (
//     <>
//       <div className="container">
//         <div className="swiper-container gallery-top">
//           <div className="swiper-wrapper">
//             <div className="swiper-slide">
//               a
//               <img
//                 src="/images/promotions/slide_2.png" alt="img"/>
//               </div>
//             <div className="swiper-slide">
//               <img
//                 src="/images/promotions/slide_2.png" alt="img"/>
//             </div>
//             <div className="swiper-slide">
//               <img
//                 src="/images/promotions/slide_2.png" alt="img"/>
//             </div>
//           </div>
//
//           <div className="swiper-button-next swiper-button-white"></div>
//           <div className="swiper-button-prev swiper-button-white"></div>
//         </div>
//         <div className="swiper-container gallery-thumbs">
//           <div className="swiper-wrapper">
//             <div className="swiper-slide">
//               <img
//                 src="/images/promotions/slide_2.png" alt="img"/>
//             </div>
//             <div className="swiper-slide">
//               <img
//                 src="/images/promotions/slide_2.png" alt="img"/>
//             </div>
//             <div className="swiper-slide">
//               <img
//                 src="/images/promotions/slide_2.png" alt="img"/>
//             </div>
//             <div className="swiper-slide">
//               <img
//                 src="/images/promotions/slide_2.png" alt="img"/>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// };
//
// export default PromotionsAndOffers;


//
//
// const PromotionsAndOffers = () => {
//   const params = {
//     pagination: {
//       el: ".swiper-pagination",
//       type: "progressbar",
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   };
//   return (
//     <>
//       <div className="container">
//       <p className="main-text-prom-and-offers">АКЦИИ И СПЕЦПРЕДЛОЖЕНИЯ</p>
//         <Swiper {...params}>
//           {/* first slide */}
//           <div className="promotions__first-col-first-img">
//             <div className="promotions__photo-canon">
//               <img
//                 className="promotions__canon-photo"
//                 src="/images/promotions/prom1.png"
//                 alt="img"
//               />
//               <img
//                 className="promotions__canon-logo"
//                 src="/images/promotions/Canon_logo.png"
//                 alt="img"
//               />
//             </div>
//             <div className="promotions__photo-canon-price">
//               <p className="promotions__first-col-first-text mt100">
//                 <span className="text-bold">Canon EOS 5D Mark IV </span>
//                 <br />
//                 Kit 24-70 f/4L IS USM
//               </p>
//               <p className="promotions__first-col-first-text mt40 d-flex">
//                 118 161
//                 <span className="rotate-text-1st">грн</span>
//               </p>
//               <p className="promotions__first-col-first-text fosi70 d-flex">
//                 77 299
//                 <span className="rotate-text-2st">грн</span>
//               </p>
//             </div>
//           </div>
//           {/* second slide */}
//           <div
//             className="promotions__first-col-two-imgs second-bg-color"
//             id="2"
//           >
//             <div className="promotions__first-col-two-img1">
//               <img
//                 className="promotions__first-col-two-img1_slide1"
//                 src="/images/promotions/slide_2.png"
//                 alt="img"
//               />
//               <div className="promotions__first-col-two-img1_tripod">
//               <p className="promotions__first-col-first-text mt100">
//                 <span className="text-bold">NIKON Z7 + 24-70 F4.0  </span>
//                 <br />
//                 FTZ Mount Adapter
//               </p>
//               <p className="promotions__first-col-first-text mt40 d-flex">
//                 108 999
//                 <span className="rotate-text-1st">грн</span>
//               </p>
//               <p className="promotions__first-col-first-text fosi70 d-flex">
//                 94 999
//                 <span className="rotate-text-2st">грн</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* third slide */}
//           <div className="promotions__first-col-two-img1 third-bg-color">
//             <img
//               className="promotions__first-col-two-img1_slide2"
//               src="/images/promotions/slide_3.png"
//               alt="img"
//             />
//             <div className="promotions__first-col-two-img1_tripod">
//               <p className="promotions__first-col-first-text mt100">
//                 <span className="text-bold">NIKON D6 + 155-50 H0  </span>
//                 <br />
//                 Photo Moment
//               </p>
//               <p className="promotions__first-col-first-text mt40 d-flex">
//                 179 899
//                 <span className="rotate-text-1st">грн</span>
//               </p>
//               <p className="promotions__first-col-first-text fosi70 d-flex">
//                 149 999
//                 <span className="rotate-text-2st">грн</span>
//                 </p>
//             </div>
//           </div>
//         </Swiper>
//       </div>
//     </>
//   );
// };
// export default PromotionsAndOffers;
