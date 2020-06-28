import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import './Gallery.scss';

import { connect } from 'react-redux';
import { setCurrentProduct } from '../../store/actions/actions';


const Gallery = (props) => {
    const { product, setCurrentProduct } = props;
    const { imageUrls } = product;

    const [gallerySwiper, getGallerySwiper] = useState(null);
    const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
    const gallerySwiperParams = {
        getSwiper: getGallerySwiper,
        spaceBetween: 10,
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
        direction: "vertical",
        slidesPerView: 1,
        // rebuildOnUpdate: true
    };
    const thumbnailSwiperParams = {
        getSwiper: getThumbnailSwiper,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
        direction: "vertical",
        slidesPerView: 4

    };
    let slidesRight=[];
    let slidesLeft=[]
    if (imageUrls&& imageUrls.length) {
         slidesRight = imageUrls.map(slide => (
            <div key={slide} className="prod-slider-rigth"><img alt='.' src={slide} /></div>
        ));
         slidesLeft = imageUrls.map(slide => (
            <div key={slide}><img className="prod-slider-left" alt='.' src={slide} /></div>
        ));
    }

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
        <div className="swiper-container">
            <Swiper {...thumbnailSwiperParams} >
                {slidesRight}
            </Swiper>
            <Swiper {...gallerySwiperParams} >
                {slidesLeft}
            </Swiper>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrentProduct: (prod) => dispatch(setCurrentProduct(prod))
    }
}

export default connect(null, mapDispatchToProps)(Gallery);