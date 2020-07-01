import React, { useEffect } from 'react';
// import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Tabs from '../../components/Tabs/Tabs';
import { Description } from '../../components/Tabs/Description';
import Characteristics from '../../components/Tabs/Characteristics';
import ProductPageInfo from './ProductPageInfo';
import Slider from '../../containers/SliderOfHitProducts/Slider';
import './ProductPage.scss';

import axios from 'axios';

import { withRouter } from "react-router";
import { setCurrentProduct } from '../../store/actions/actions';
import { connect } from 'react-redux';

const ProductPage = (props) => {
    const { setCurrentProduct, product } = props;

    useEffect(() => {
        currentProduct().then(result => setCurrentProduct(result))
    }, [setCurrentProduct]);

    const { match } = props;
    function currentProduct() {
        const result = axios.get(`/products/${match.params.itemNo}`)
            .then(res => res.data)
            .catch(err => {
                console.log(err.message)
            });
        return result;
    };
    // const qwe = async() => {
    //     const result = await currentProduct();
    //     setProduct(result);
    // }

    return (
        product ?
            <div id='productPage'>
                <div className="container">
                    {/* <Breadcrumb productTitle={product.name} /> */}
                    <div className='slider-info'>
                        <div className="product-page-header">
                            <div className="product-page-header_title">{product.name}</div>
                            <div className="product-page-header_article">Код товара: {product.article}</div>
                        </div>
                        <div></div>
                    </div>
                    <ProductPageInfo />
                    <Tabs
                        description={<Description />}
                        characteristics={<Characteristics currentProduct={product} />}
                    />
                </div>
                <Slider sliderTitle="Недавно просмотренные" className="recentlyViewed" />
            </div> : null
    )
};

const mapStateToProps = store => {
    return {
        product: store.products.currentProduct
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrentProduct: (product) => dispatch(setCurrentProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductPage));
