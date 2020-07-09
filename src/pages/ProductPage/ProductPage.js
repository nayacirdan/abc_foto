import React, { useEffect, useCallback} from 'react';
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

import { Link } from 'react-scroll';
import Card from '../../components/Card/Card';

const ProductPage = (props) => {
    const { setCurrentProduct, product, history, match, recentlyViewedProds } = props;

    const getItemByItemNo = useCallback(
        async () => {
            const result = await axios.get(`/products/${match.params.itemNo}`)
                .then(res => res.data)
                .catch(err => {
                    console.log(err.message)
                });
            return result;
        },
        [match.params.itemNo],
    );
    const recentlyViewedProducts = () => {
        const sliderProducts = (recentlyViewedProds || []).map(product => (
            <div key={product.itemNo} className="slider-card">
                <Link
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    to='productPage'
                    duration={500}
                >
                    <Card key={product.itemNo} product={product} />
                </Link>
            </div>)
        );

        if (sliderProducts.length > 3 || sliderProducts.length === 0) {
            return (<Slider sliderTitle="Недавно просмотренные" className="recentlyViewed" prods={sliderProducts} />)
        } else {
            return null
        }
    }
    useEffect(() => {
        getItemByItemNo().then(result => setCurrentProduct(result))
        recentlyViewedProducts()
    }, [setCurrentProduct, history.location, getItemByItemNo]);

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
                {recentlyViewedProducts()}
            </div> : null
    )
};

const mapStateToProps = store => {
    return {
        product: store.products.currentProduct,
        recentlyViewedProds: store.products.recentlyViewedProducts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrentProduct: (product) => dispatch(setCurrentProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductPage));
