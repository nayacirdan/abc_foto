import React, { useState, useEffect } from "react";
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
                <span className="text-bold">NIKON D6 body  </span>
                <br />
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

/*
class Promotions extends Component {
  render() {
    return (
      <>
        <div className="main-text-prom-and-offers-bg">
          <div className="container">
            <p className="main-text-prom-and-offers">АКЦИИ И СПЕЦПРЕДЛОЖЕНИЯ</p>
            <div className="promotions">
              <div className="promotions__first-col">

                <div className="promotions__first-col-two-imgs" id="2">
                  <div className="promotions__first-col-two-img1">
                    <img src="/images/promotions/prom4.png" alt="img" />
                    <div className="promotions__first-col-two-img1_tripod">
                      <p className="promotions__first-col-two-img1_tripod-text">
                        СУПЕРЦЕНА
                      </p>
                      <p className="promotions__first-col-two-img1_tripod-text">
                        5 685
                        <span className="rotate-text-1st">грн</span>
                      </p>
                    </div>
                  </div>
                  <div className="promotions__first-col-two-img2">
                    <div className="promotions__first-col-two-img2_lens">
                      <p className="promotions__first-col-two-img2_lens-text">
                        Объектив <br />
                        <span className="text-bold">
                          Nikon 50mmf
                          <br /> 1.8G AF-S
                        </span>
                      </p>
                      <p className="promotions__first-col-two-img2_lens-text-through-price">
                        4 982 <span className="rotate-text-1st">грн</span>
                      </p>
                      <p className="promotions__first-col-two-img2_lens-text-actual-price">
                        4 758 <span className="small-text-uah">грн</span>
                      </p>
                    </div>
                    <img src="/images/promotions/prom5.png" alt="img" />
                  </div>
                </div>
              </div>
              <div className="promotions__second-col">
                <div className="promotions__second-col-two-img1">
                  <div className="mini-cart-container">
                    <p className="promotions__second-col-two-img1_text-procent">
                      Скидка 10%
                    </p>
                    <p className="promotions__first-col-two-img2_lens-text-actual-price">
                      1 120 <span className="rotate-text-1st">грн</span>
                    </p>
                    <p className="promotions__second-col-two-img1_text-dj">
                      Benro DJ-80
                    </p>
                  </div>
                  <img
                    className="promotions__second-col-two-img1_first-img"
                    src="/images/promotions/prom2.png"
                    alt="img"
                  />
                </div>
                <div className="promotions__second-col-two-img2">
                  <div className="promotions__second-col-two-img2">
                    <img
                      className="promotions__second-col-two-img2_tripod-img-mt"
                      src="/images/promotions/prom3.png"
                      alt="img"
                    />
                    <div className="promotions__second-col-two-img2_tripod">
                      <p className="promotions__second-col-two-img2_tripod-text">
                        -10%
                      </p>
                      <img
                        src="/images/promotions/benro_xseries_rgb_900.png"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
                <div className="promotions__second-col-two-img3">
                  <div className="promotions__first-col-two-img2 bgc-red">
                    <div className="promotions__first-col-two-img2_lens">
                      <p className="promotions__first-col-two-img2_lens-text paper-mt">
                        Фотобумага <br />
                        <span className="text-bold">Canon KP-108IN</span>
                      </p>
                      <p className="promotions__first-col-two-img2_lens-text-through-price">
                        1 028 <span className="rotate-text-1st">грн</span>
                      </p>
                      <p className="promotions__first-col-two-img2_lens-text-actual-price">
                        908 <span className="small-text-uah">грн</span>
                      </p>
                    </div>
                    <img src="/images/promotions/prom6.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="promotions__green-buttons d-flex">
              <button className="promotions__green-buttons_btn border-right-btn">
                <ArrowBackIosIcon
                  style={{ marginLeft: "10px" }}
                  onClick={this.prevImage}
                />
              </button>
              <button
                className="promotions__green-buttons_btn"
                id="next-btn"
                onClick={this.nextImage}
              >
                <ArrowForwardIosIcon />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Promotions; 

*/
