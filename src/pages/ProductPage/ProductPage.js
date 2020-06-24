import React, { useState, useEffect } from 'react';
import Gallery from '../../components/Gallery/Gallery';
// import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Tabs from '../../components/Tabs/Tabs';
import ContainedButtons from '../../components/Button/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SimpleExpansionPanel from '../../components/ExpansionPanel/ExpansionPanel';
import { Description } from '../../components/Tabs/Description';
import Characteristics from '../../components/Tabs/Characteristics';
import Slider from '../../containers/SliderOfHitProducts/Slider';
import './ProductPage.scss';
import { DeliveryInfo } from '../../components/ExpansionPanel/DeliveryInfo';
import axios from 'axios';
import { withRouter } from "react-router";

const ProductPage = (props) => {

    const [product, setProduct] = useState(null);
    useEffect(() => {
        currentProduct().then(result => setProduct(result))
    }, [setProduct])

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

    const getProductAvailability = () => {
        if (product.isAvailable) {
            return (<span className="availText">
                В наличии
            </span>)
        } else {
            if (product.isExpected) {
                return (<span className="expectText">
                    Ожидается
                </span>)
            } else {
                return (<span className="notAvailText">
                    Нет в наличии
                </span>)
            }
        }
    }

    return (
        product ?
            <div>
                <div className="container">
                    {/* <Breadcrumb productTitle={product.name} /> */}
                    <div className='slider-info'>
                        <div className="product-page-header">
                            <div className="product-page-header_title">{product.name}</div>
                            <div className="product-page-header_article">Код товара: {product.article}</div>
                        </div>
                        <div></div>
                    </div>
                    <div className="slider-info">
                        <Gallery product={product} />
                        <div className='credit'>
                            <div className='availability'>{getProductAvailability()}</div>
                            <div>
                                {product.previousPrice ? (
                                    <div className='priceContainer'>
                                        <div className='salePrice'>
                                            <span>{product.currentPrice}</span> грн
                                    </div>
                                        <div className='oldPrice'>
                                            <span>{product.previousPrice}</span> грн
                                    </div>
                                    </div>
                                ) :
                                    (
                                        <div className='fullPrice'>
                                            <span>{product.currentPrice}</span> грн
                                        </div>
                                    )
                                }
                            </div>
                            <div className='purchase'>
                                <div className='purchase_block'>
                                    <ContainedButtons className="green-btn"
                                        text={<div className="btn btn-buy">
                                            <p>Купить</p>
                                            <ShoppingCartOutlinedIcon className='buy-icon' />
                                        </div>} />
                                    <div className="delivery">
                                        <h4>ДОСТАВКА</h4>
                                        <div>
                                            <ul>
                                                <li>Доставка по всей Украине</li>
                                                <li>Оплата товара при получении</li>
                                                <li>Возможен самовывоз</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <div className='purchase_block'>
                                    <ContainedButtons className="grey-btn"
                                        text={<div className="btn">
                                            <p>Купить в кредит</p>
                                        </div>} />

                                    <div className="guarantee">
                                        <h4>ГАРАНТИЯ</h4>
                                        <p>Официальная 24 месяца от производителя</p>
                                    </div>
                                </div>
                            </div>
                            <SimpleExpansionPanel title='Условия доставки и оплаты'
                                main={<DeliveryInfo />}
                                className='expansion-panel'
                            />
                        </div>
                    </div>
                    <Tabs
                        description={<Description />}
                        characteristics={<Characteristics currentProduct={product} />}
                    />
                </div>
                <Slider sliderTitle="Недавно просмотренные" className="recentlyViewed" />
            </div> : null
    )
};

export default withRouter(ProductPage);
