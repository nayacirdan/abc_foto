import React, { useEffect } from "react";
import Slider from "react-slick";
import Card from '../../components/Card/Card';
import { connect } from "react-redux";

import { getProducts } from '../../store/actions/actions';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        />
    );
}

const Responsive = (props) => {
    const { products, getProducts, sliderTitle } = props;
    useEffect(() => {
        getProducts()
    }, [getProducts]);

    var settings = {
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    debugger;
    let filtedProducts=[];
    let sliderProducts=[];
    if(products.length){
        filtedProducts = products.filter((key) => (key.isAvailable === true || key.isExpected === true));
        sliderProducts = filtedProducts.map(product => (
            <div key={product.id} className="slider-card">
                <Card key={product.id} product={product} />
            </div>)
        );
    }

    
    return (
        <div className="container slider">
            <h2 className="slider__header">{sliderTitle}</h2>
            <Slider {...settings} className="slider__main">
                {sliderProducts}
            </Slider>
        </div>
    );
}

const mapStateToProps = (store) => {
    return {
        products: store.products
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(getProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Responsive);
