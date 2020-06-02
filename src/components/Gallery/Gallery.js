import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import './Gallery.scss';


const Gallery = () => {
    const [gallerySwiper, getGallerySwiper] = useState(null);
    const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
    const gallerySwiperParams = {
        getSwiper: getGallerySwiper,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        direction: "vertical",
        slidesPerView: 1
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
                <div className="prod-slider-rigth"><img alt='.' src='images/gallery_items/canon_1/image_1.jpg' /></div>
                <div className="prod-slider-rigth"><img alt='.' src='images/gallery_items/canon_1/image_2.jpg' /></div>
                <div className="prod-slider-rigth"><img alt='.' src='images/gallery_items/canon_1/image_3.jpg' /></div>
                <div className="prod-slider-rigth"><img alt='.' src='images/gallery_items/canon_1/image_4.jpg' /></div>
            </Swiper>
            <Swiper {...gallerySwiperParams} >
                <div><img className="prod-slider-left" alt='.' src='images/gallery_items/canon_1/image_1.jpg' /></div>
                <div><img className="prod-slider-left" alt='.' src='images/gallery_items/canon_1/image_2.jpg' /></div>
                <div><img className="prod-slider-left" alt='.' src='images/gallery_items/canon_1/image_3.jpg' /></div>
                <div><img className="prod-slider-left" alt='.' src='images/gallery_items/canon_1/image_4.jpg' /></div>
            </Swiper>
        </div>
    );
};
export default Gallery;