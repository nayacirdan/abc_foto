import React from 'react';
import Swiper from 'react-id-swiper';

const FlipEffect = (props) => {
  const { product } = props;
  const { imageUrls } = product;

  const params = {
    effect: 'flip',
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination'
    },
    shouldSwiperUpdate: true,
    infinite: true
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev'
    // }
  };

  let slides = [];
  if (imageUrls && imageUrls.length) {
    slides = imageUrls.map(slide => (
      <div key={slide}><img alt='.' src={slide} style={{width: '400px', height: '400px', marginBottom: '7%'}} /></div>
    ));
  }
  return (
    <Swiper {...params} className='swiper-container'>
      {slides}
    </Swiper>
  );
};
export default FlipEffect;