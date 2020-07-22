import React from 'react';
import Swiper from 'react-id-swiper';
import './PromotionsAndOffers.scss';

const SimpleSwiperWithParams = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };

  return (
    <>
      <div className="container">
        <p className="promotions-main-text">АКЦИИ И СПЕЦПРЕДЛОЖЕНИЯ</p>
        <Swiper {...params}>
          <div>
            <div className="promotions__section-1 prom-container">
              <div className="promotions__section-1__photo-logo">
                <img
                  className="promotions__img"
                  src="/images/promotions/main1.png"
                  alt="img"
                />
                <img
                  className="promotions__section-1__logo"
                  src="/images/promotions/Canon_logo.png"
                  alt="img"
                />
              </div>
              <div className="promotions__section-1__about-photo-logo">
                <span className="promotions__section-1__about-photo-logo-bold">
                  Canon EOS 5D Mark IV
                </span>
                <br />
                Kit 24-70 f/4L IS USM
                <p className="promotions__section-1__about-photo-logo_text-past">
                  118 161грн
                </p>
                <p className="promotions__section-1__about-photo-logo_text-now">
                  77 299<span className="medium-text-uah">грн</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="promotions__bottom-section_first-item two-slide">
              <div className="promotions__section-1__about-photo-logo">
                <span className="promotions__section-1__about-photo-logo-bold">
                  Штатив
                </span>
                <br />
                Benro WW-B
                <p className="promotions__section-1__about-photo-logo_text-past">
                  915грн
                </p>
                <p className="promotions__section-1__about-photo-logo_text-now">
                  699<span className="medium-text-uah">грн</span>
                </p>
              </div>
              <div className="promotions__bottom-section_second-item_img">
                <img
                  className="promotions__img benro-contain adaptive-benro"
                  src="/images/promotions/benro-dj-80.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="promotions__bottom-section_second-item two-slide">
              <div className="promotions__section-1__about-photo-logo">
                <span className="promotions__section-1__about-photo-logo-bold">
                  Объектив Nikon
                </span>
                <br />
                50mmf 1.8G AF-S
                <p className="promotions__section-1__about-photo-logo_text-past">
                  4 980грн
                </p>
                <p className="promotions__section-1__about-photo-logo_text-now">
                  4 750<span className="medium-text-uah">грн</span>
                </p>
              </div>
              <div className="promotions__bottom-section_second-item_img">
                <img
                  className="promotions__img benro-contain"
                  src="/images/promotions/50mmf-img.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="promotions__bottom-section_third-item two-slide">
              <div className="promotions__section-1__about-photo-logo">
                <span className="promotions__section-1__about-photo-logo-bold">
                  Фотобумага
                </span>
                <br />
                Canon KP-108IN
                <p className="promotions__section-1__about-photo-logo_text-past">
                  1 028грн
                </p>
                <p className="promotions__section-1__about-photo-logo_text-now">
                  908<span className="medium-text-uah">грн</span>
                </p>
              </div>
              <div className="promotions__bottom-section_third-item_img">
                <img
                  className="promotions__img benro-contain"
                  src="/images/promotions/photopaper.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </Swiper>
        <div className="promotions__bottom-section">
          <div className="promotions__bottom-section_first-item">
            <div className="promotions__bottom-section_second-item_text">
              <p className="promotions__bottom-section_second-item_text-objectiv">
                Штатив
                <br />
                <span className="promotions__bottom-section_second-item_text-objectiv_bold">
                  Benro <br />
                  WW-B{' '}
                </span>
              </p>{' '}
              <p className="promotions__bottom-section_second-item_text_past-price">
                915<span className="small-text-uah">грн</span>
              </p>
              <p className="promotions__bottom-section_second-item_text_now-price">
                699<span className="small-text-uah">грн</span>
              </p>
            </div>
            <div className="promotions__bottom-section_second-item_img">
              <img
                className="promotions__img"
                src="/images/promotions/benro-dj-80.png"
                alt="img"
              />
            </div>
          </div>
          <div className="promotions__bottom-section_second-item">
            <div className="promotions__bottom-section_second-item_text">
              <p className="promotions__bottom-section_second-item_text-objectiv">
                Объектив
                <br />
                <span className="promotions__bottom-section_second-item_text-objectiv_bold">
                  Nikon 50mmf
                  <br />
                  1.8G AF-S{' '}
                </span>
              </p>
              <p className="promotions__bottom-section_second-item_text_past-price">
                4 980<span className="small-text-uah">грн</span>
              </p>
              <p className="promotions__bottom-section_second-item_text_now-price">
                4 750<span className="small-text-uah">грн</span>
              </p>
            </div>
            <div className="promotions__bottom-section_second-item_img">
              <img
                className="promotions__img"
                src="/images/promotions/50mmf-img.png"
                alt="img"
              />
            </div>
          </div>
          <div className="promotions__bottom-section_third-item">
            <div className="promotions__bottom-section_third-item_text">
              <p className="promotions__bottom-section_third-item_text_name-photopaper">
                Фотобумага
                <br />
                <span className="promotions__bottom-section_third-item_text_name-photopaper_bold">
                  Canon KP-108IN
                </span>
              </p>
              <p className="promotions__bottom-section_second-item_text_past-price">
                1 028<span className="small-text-uah">грн</span>
              </p>
              <p className="promotions__bottom-section_second-item_text_now-price">
                908<span className="small-text-uah">грн</span>
              </p>
            </div>
            <div className="promotions__bottom-section_third-item_img">
              <img
                className="promotions__img"
                src="/images/promotions/photopaper.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleSwiperWithParams;

// import React, { useState, useEffect } from "react";
// import Swiper from "react-id-swiper";
// import SlideItem from "./slideItem";
// import "./PromotionsAndOffers.scss";
// import { Pagination, Navigation, Lazy } from "react-id-swiper";

// const images = [
//   [
//     {
//       src: "/images/promotions/main1.png",
//     },
//     {
//       src: "/images/promotions/benro-dj-80.png",
//     },
//     {
//       src: "/images/promotions/50mmf-img.png",
//     },
//   ],
//   [
//     {
//       src: "/images/promotions/50mmf-img.png",
//     },
//     {
//       src: "/images/promotions/50mmf-img.png",
//     },
//   ],
//   [
//     {
//       src: "/images/promotions/50mmf-img.png",
//     },
//   ],
// ];

// const ManipulatingSwiper = () => {
//   // Swiper instance
//   const [swiper, updateSwiper] = useState(null);
//   // Slides current index
//   const [currentIndex, updateCurrentIndex] = useState(0);
//   // Define default image set
//   const [imageSet, updateImageSet] = useState(0);
//   // Params definition
//   let params = {
//     modules: [Pagination, Navigation, Lazy],
//     preloadImages: false,
//     lazy: true,
//     pagination: {
//       el: ".swiper-pagination",
//       type: "bullets",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     loop: false,
//     spaceBetween: 30,
//     getSwiper: updateSwiper, // Get swiper instance callback
//   };

//   // Add Pagination and Navigation in case there's only 1 image.
//   // @note This approach isn't working, neither `shouldSwiperUpdate` nor `rebuildOnUpdate` are invoked.
//   if (false && images[imageSet].length > 1) {
//     params = {
//       ...params,
//       pagination: {
//         el: ".swiper-pagination",
//         type: "bullets",
//         clickable: true,
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     };
//   }

//   // Add eventlisteners for swiper after initializing
//   useEffect(() => {
//     if (swiper !== null) {
//       swiper.on("slideChange", () => updateCurrentIndex(swiper.realIndex));
//       swiper.on("slideChangeTransitionStart", () =>
//         updateCurrentIndex(swiper.realIndex)
//       );
//     }
//   }, [swiper]);

//   // Update swiper after image set changes
//   useEffect(() => {
//     if (swiper !== null) {
//       swiper.update();
//       swiper.slideTo(0);

//       // We should hide pagination in case there's less than 2 images.
//       const shouldPaginationHide = images[imageSet].length < 2;
//       const isPaginationHidden = swiper.pagination.$el.hasClass(
//         swiper.params.pagination.hiddenClass
//       );

//       console.log(swiper);

//       // Trigger emit event in case there are some extra callbacks.
//       if (shouldPaginationHide && !isPaginationHidden) {
//         swiper.emit("paginationHide", swiper);
//       }

//       if (!shouldPaginationHide && isPaginationHidden) {
//         swiper.emit("paginationShow", swiper);
//       }

//       // Toggle pagination if it's needed
//       if (shouldPaginationHide !== isPaginationHidden) {
//         swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
//       }

//       swiper.lazy.load();
//     }
//   }, [imageSet]);

//   return (
//     <div>
//       <div className="container">
//         <p className="promotions-main-text">АКЦИИ И СПЕЦПРЕДЛОЖЕНИЯ</p>
//         <div className="promotions">
//           <Swiper {...params}>
//             {images[imageSet].map(
//               (image, idx) =>
//                 console.log(`Showing image set ${imageSet}`) || (
//                   <SlideItem key={`slide_${idx}`}>
//                     <div className="promotions__section-1 prom-container">
//                       <div className="promotions__section-1__photo-logo">
//                         <img
//                           className="promotions__img"
//                           // src="/images/promotions/main1.png"
//                           alt="img"
//                           key={image.src}
//                           src={image.src}
//                           // className="swiper-lazy"
//                           data-src={image.src}
//                         />
//                         <img
//                           className="promotions__section-1__logo"
//                           src="/images/promotions/Canon_logo.png"
//                           alt="img"
//                         />
//                       </div>
//                       <div className="promotions__section-1__about-photo-logo">
//                         <span className="promotions__section-1__about-photo-logo-bold">
//                           Canon EOS 5D Mark IV
//                         </span>
//                         <br />
//                         Kit 24-70 f/4L IS USM
//                         <p className="promotions__section-1__about-photo-logo_text-past">
//                           118 161грн
//                         </p>
//                         <p className="promotions__section-1__about-photo-logo_text-now">
//                           77 299<span className="medium-text-uah">грн</span>
//                         </p>
//                       </div>
//                     </div>
//                   </SlideItem>
//                 )
//             )}
//           </Swiper>
//           <div className="promotions__bottom-section">
//             <div className="promotions__bottom-section_first-item">
//               <div className="promotions__bottom-section_second-item_text">
//                 <p className="promotions__bottom-section_second-item_text-objectiv">
//                   Штатив
//                   <br />
//                   <span className="promotions__bottom-section_second-item_text-objectiv_bold">
//                     Benro <br />
//                     WW-B{" "}
//                   </span>
//                 </p>
//                 <p className="promotions__bottom-section_second-item_text_past-price">
//                   915<span className="small-text-uah">грн</span>
//                 </p>
//                 <p className="promotions__bottom-section_second-item_text_now-price">
//                   699<span className="small-text-uah">грн</span>
//                 </p>
//               </div>
//               <div className="promotions__bottom-section_second-item_img">
//                 <img
//                   className="promotions__img"
//                   src="/images/promotions/benro-dj-80.png"
//                   alt="img"
//                 />
//               </div>
//             </div>
//             <div className="promotions__bottom-section_second-item">
//               <div className="promotions__bottom-section_second-item_text">
//                 <p className="promotions__bottom-section_second-item_text-objectiv">
//                   Объектив
//                   <br />
//                   <span className="promotions__bottom-section_second-item_text-objectiv_bold">
//                     Nikon 50mmf
//                     <br />
//                     1.8G AF-S{" "}
//                   </span>
//                 </p>
//                 <p className="promotions__bottom-section_second-item_text_past-price">
//                   4 982<span className="small-text-uah">грн</span>
//                 </p>
//                 <p className="promotions__bottom-section_second-item_text_now-price">
//                   4 758<span className="small-text-uah">грн</span>
//                 </p>
//               </div>
//               <div className="promotions__bottom-section_second-item_img">
//                 <img
//                   className="promotions__img"
//                   src="/images/promotions/50mmf-img.png"
//                   alt="img"
//                 />
//               </div>
//             </div>
//             <div className="promotions__bottom-section_third-item">
//               <div className="promotions__bottom-section_third-item_text">
//                 <p className="promotions__bottom-section_third-item_text_name-photopaper">
//                   Фотобумага
//                   <br />
//                   <span className="promotions__bottom-section_third-item_text_name-photopaper_bold">
//                     Canon KP-108IN
//                   </span>
//                 </p>
//                 <p className="promotions__bottom-section_second-item_text_past-price">
//                   1 028<span className="small-text-uah">грн</span>
//                 </p>
//                 <p className="promotions__bottom-section_second-item_text_now-price">
//                   908<span className="small-text-uah">грн</span>
//                 </p>
//               </div>
//               <div className="promotions__bottom-section_third-item_img">
//                 <img
//                   className="promotions__img"
//                   src="/images/promotions/photopaper.png"
//                   alt="img"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManipulatingSwiper;

// // import React from 'react';

// // import './PromotionsAndOffers.scss';

// // export default function PromotionsAndOffers () {
// //   return (
// //     <div className="container">
// //       <p className="promotions-main-text">АКЦИИ И СПЕЦПРЕДЛОЖЕНИЯ</p>
// //       <div className="promotions">
// //         <div className="promotions__section-1 prom-container">
// //           <div className="promotions__section-1__photo-logo">
// //             <img className="promotions__img" src="/images/promotions/main1.png" alt="img"/>
// //             <img className="promotions__section-1__logo" src="/images/promotions/Canon_logo.png" alt="img"/>
// //           </div>
// //           <div className="promotions__section-1__about-photo-logo">
// //             <span className="promotions__section-1__about-photo-logo-bold">Canon EOS 5D Mark IV</span><br/>Kit 24-70
// //             f/4L IS USM
// //             <p className="promotions__section-1__about-photo-logo_text-past">118 161грн</p>
// //             <p className="promotions__section-1__about-photo-logo_text-now">77 299<span
// //               className="medium-text-uah">грн</span></p>
// //           </div>
// //         </div>

// //         <div className="promotions__bottom-section">
// //           <div className="promotions__bottom-section_first-item">
// //             <div className="promotions__bottom-section_second-item_text">
// //               <p className="promotions__bottom-section_second-item_text-objectiv">Штатив<br/>
// //                 <span
// //                   className="promotions__bottom-section_second-item_text-objectiv_bold">Benro <br/>WW-B </span>
// //               </p>
// //               <p className="promotions__bottom-section_second-item_text_past-price">915<span
// //                 className="small-text-uah">грн</span></p>
// //               <p className="promotions__bottom-section_second-item_text_now-price">699<span
// //                 className="small-text-uah">грн</span></p>
// //             </div>
// //             <div className="promotions__bottom-section_second-item_img">
// //               <img className="promotions__img" src="/images/promotions/benro-dj-80.png" alt="img"/>
// //             </div>
// //           </div>
// //           <div className="promotions__bottom-section_second-item">
// //             <div className="promotions__bottom-section_second-item_text">
// //               <p className="promotions__bottom-section_second-item_text-objectiv">Объектив<br/>
// //                 <span
// //                   className="promotions__bottom-section_second-item_text-objectiv_bold">Nikon 50mmf<br/>1.8G AF-S </span>
// //               </p>
// //               <p className="promotions__bottom-section_second-item_text_past-price">4 982<span
// //                 className="small-text-uah">грн</span></p>
// //               <p className="promotions__bottom-section_second-item_text_now-price">4 758<span
// //                 className="small-text-uah">грн</span></p>
// //             </div>
// //             <div className="promotions__bottom-section_second-item_img">
// //               <img className="promotions__img" src="/images/promotions/50mmf-img.png" alt="img"/>
// //             </div>
// //           </div>
// //           <div className="promotions__bottom-section_third-item">
// //             <div className="promotions__bottom-section_third-item_text">
// //               <p className="promotions__bottom-section_third-item_text_name-photopaper">Фотобумага<br/><span
// //                 className="promotions__bottom-section_third-item_text_name-photopaper_bold">Canon KP-108IN</span></p>
// //               <p className="promotions__bottom-section_second-item_text_past-price">1 028<span
// //                 className="small-text-uah">грн</span></p>
// //               <p className="promotions__bottom-section_second-item_text_now-price">908<span
// //                 className="small-text-uah">грн</span></p>
// //             </div>
// //             <div className="promotions__bottom-section_third-item_img">
// //               <img className="promotions__img" src="/images/promotions/photopaper.png" alt="img"/>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
