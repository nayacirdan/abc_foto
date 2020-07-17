import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';

function SampleNextArrow (props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow (props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

const Responsive = (props) => {
  const { sliderTitle, prods } = props;

  var settings = {
    infinite: true,
    lazyLoad: true,
    centerPadding: true,
    speed: 500,
    // '@media (min-width: 1200px)': {
    //   slidesToShow: 4
    // },
    // '@media (min-width: 980px) and (max-winth: 1199px)': {
    //   slidesToShow: 3,

    // },
    slidesToScroll: 4,
    slidesToShow: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          initialSlide: 1,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container slider">
      <h2 className="slider__header">{sliderTitle}</h2>
      <Slider {...settings} className="slider__main">
        {prods}
      </Slider>
    </div>
  );
};

Responsive.propTypes = {
  prods: PropTypes.array.isRequired
};

export default Responsive;
