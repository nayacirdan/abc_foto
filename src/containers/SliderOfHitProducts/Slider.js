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
    slidesToScroll: 4,
    slidesToShow: 4,
    // slidesToShow: prods.length > 4 ? 4 : prods.length,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          // slidesToShow: prods.length > 3 ? 3 : prods.length,
          initialSlide: 1,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 979,
        settings: {
          slidesToShow: 2,
          // slidesToShow: prods.length > 2 ? 2 : prods.length,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          // slidesToShow: prods.length > 1 ? 1 : prods.length,
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

export default React.memo(Responsive);
