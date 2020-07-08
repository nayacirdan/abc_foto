import React from 'react';

import './PromotionsAndOffers.scss';

export default function PromotionsAndOffers () {
  return (
    <div className="container">
      <p className="promotions-main-text">АКЦИИ И СПЕЦПРЕДЛОЖЕНИЯ</p>
      <div className="promotions">
        <div className="promotions__section-1 prom-container">
          <div className="promotions__section-1__photo-logo">
            <img src="/images/promotions/main1.png" alt="img"/>
            <img className="promotions__section-1__logo" src="/images/promotions/Canon_logo.png" alt="img"/>
          </div>
          <div className="promotions__section-1__about-photo-logo">
            <span className="promotions__section-1__about-photo-logo-bold">Canon EOS 5D Mark IV</span><br/>Kit 24-70
            f/4L IS USM
            <p className="promotions__section-1__about-photo-logo_text-past">118 161грн</p>
            <p className="promotions__section-1__about-photo-logo_text-now">77 299<span
              className="medium-text-uah">грн</span></p>
          </div>
        </div>
        <div className="promotions__section-2">
          <div className="promotions__section-2__first-item">
            <div className="promotions__section-2__first-item__text">
              <p className="promotions__section-2__first-item__text-percent">СКИДКА 10%</p>
              <p className="promotions__section-2__first-item__text-price">1 120<span
                className="small-text-uah">грн</span></p>
              <p className="promotions__section-2__first-item__text-name">Benro-DJ-80</p>
            </div>
            <div className="promotions__section-2__first-item__img">
              <img src="/images/promotions/benro-dj-80.png" alt="img"/>
            </div>
          </div>
          <div className="promotions__section-2__second-item">
            <div className="promotions__section-2__second-item_img">
              <img className="promotions__section-2__second-item_img-10-percent" src="/images/promotions/benro-10.png"
                alt="img"/>
            </div>
            <div className="promotions__section-2__second-item__text">
              <p className="promotions__section-2__second-item__text-percent">-10%</p>
              <img src="/images/promotions/benro-10-logo.png" alt="img"/>
            </div>
          </div>
        </div>
      </div>
      <div className="promotions__bottom-section">
        <div className="promotions__bottom-section_first-item">
          <div className="promotions__bottom-section_first-item_img">
            <img src="/images/promotions/green-img.png" alt="img"/>
          </div>
          <div className="promotions__bottom-section_first-item_text">
            <p className="promotions__bottom-section_first-item_text_super-price">СУПЕРЦЕНА</p>
            <p className="promotions__bottom-section_first-item_text_price">5 684 <span
              className="small-text-uah">грн</span></p>
          </div>
        </div>
        <div className="promotions__bottom-section_second-item">
          <div className="promotions__bottom-section_second-item_text">
            <p className="promotions__bottom-section_second-item_text-objectiv">Объектив<br/>
              <span
                className="promotions__bottom-section_second-item_text-objectiv_bold">Nikon 50mmf<br/>1.8G AF-S </span>
            </p>
            <p className="promotions__bottom-section_second-item_text_past-price">4 982<span
              className="small-text-uah">грн</span></p>
            <p className="promotions__bottom-section_second-item_text_now-price">4 758<span
              className="small-text-uah">грн</span></p>
          </div>
          <div className="promotions__bottom-section_second-item_img">
            <img src="/images/promotions/50mmf-img.png" alt="img"/>
          </div>
        </div>
        <div className="promotions__bottom-section_third-item">
          <div className="promotions__bottom-section_third-item_text">
            <p className="promotions__bottom-section_third-item_text_name-photopaper">Фотобумага<br/><span
              className="promotions__bottom-section_third-item_text_name-photopaper_bold">Canon KP-108IN</span></p>
            <p className="promotions__bottom-section_second-item_text_past-price">1 028<span
              className="small-text-uah">грн</span></p>
            <p className="promotions__bottom-section_second-item_text_now-price">908<span
              className="small-text-uah">грн</span></p>
          </div>
          <div className="promotions__bottom-section_third-item_img">
            <img src="/images/promotions/photopaper.png" alt="img"/>
          </div>
        </div>
      </div>
    </div>
  );
}