import React, { useState, useEffect } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import './ProductPage.scss';

const ProductPage = () => {


    return (
        <div className="container">
            <div className="slider-info">
                <Gallery />
                <div>
                </div>
            </div>
        </div>
    )
};

export default ProductPage;
