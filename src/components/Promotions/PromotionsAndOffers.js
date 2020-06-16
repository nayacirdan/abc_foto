import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./PromotionsAndOffers.scss";

const PromotionsAndOffers = () => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <>
      <div className="container">
      <p className="main-text-prom-and-offers">АКЦИИ И СПЕЦПРЕДЛОЖЕНИЯ</p>
        <Swiper {...params}>
          {/* first slide */}
          <div className="promotions__first-col-first-img">
            <div className="promotions__photo-canon">
              <img
                className="promotions__canon-photo"
                src="/images/promotions/prom1.png"
                alt="img"
              />
              <img
                className="promotions__canon-logo"
                src="/images/promotions/Canon_logo.png"
                alt="img"
              />
            </div>
            <div className="promotions__photo-canon-price">
              <p className="promotions__first-col-first-text mt100">
                <span className="text-bold">Canon EOS 5D Mark IV </span>
                <br />
                Kit 24-70 f/4L IS USM
              </p>
              <p className="promotions__first-col-first-text mt40 d-flex">
                118 161
                <span className="rotate-text-1st">грн</span>
              </p>
              <p className="promotions__first-col-first-text fosi70 d-flex">
                77 299
                <span className="rotate-text-2st">грн</span>
              </p>
            </div>
          </div>
          {/* second slide */}
          <div
            className="promotions__first-col-two-imgs second-bg-color"
            id="2"
          >
            <div className="promotions__first-col-two-img1">
              <img
                className="promotions__first-col-two-img1_slide1"
                src="/images/promotions/slide_2.png"
                alt="img"
              />
              <div className="promotions__first-col-two-img1_tripod">
              <p className="promotions__first-col-first-text mt100">
                <span className="text-bold">NIKON Z7 + 24-70 F4.0  </span>
                <br />
                FTZ Mount Adapter
              </p>
              <p className="promotions__first-col-first-text mt40 d-flex">
                108 999
                <span className="rotate-text-1st">грн</span>
              </p>
              <p className="promotions__first-col-first-text fosi70 d-flex">
                94 999
                <span className="rotate-text-2st">грн</span>
                </p>
              </div>
            </div>
          </div>
          {/* third slide */}
          <div className="promotions__first-col-two-img1 third-bg-color">
            <img
              className="promotions__first-col-two-img1_slide2"
              src="/images/promotions/slide_3.png"
              alt="img"
            />
            <div className="promotions__first-col-two-img1_tripod">
              <p className="promotions__first-col-first-text mt100">
                <span className="text-bold">NIKON D6 + 155-50 H0  </span>
                <br />
                Photo Moment
              </p>
              <p className="promotions__first-col-first-text mt40 d-flex">
                179 899
                <span className="rotate-text-1st">грн</span>
              </p>
              <p className="promotions__first-col-first-text fosi70 d-flex">
                149 999
                <span className="rotate-text-2st">грн</span>
                </p>
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};
export default PromotionsAndOffers;
