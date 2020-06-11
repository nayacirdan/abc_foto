import React from 'react';
import Gallery from '../../components/Gallery/Gallery';
// import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Tabs from '../../components/Tabs/Tabs';
import ContainedButtons from '../../components/Button/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SimpleExpansionPanel from '../../components/ExpansionPanel/ExpansionPanel';
import { Description } from '../../components/Tabs/Description';
import Slider from '../../containers/SliderOfHitProducts/Slider';
import './ProductPage.scss';
import { DeliveryInfo } from '../../components/ExpansionPanel/DeliveryInfo';

const ProductPage = () => {
    const currentProduct = {
        "id": "5ec51f3d3bc90380de9985a9",
        "collection": "Фотоаппараты",
        "mainPhotoUrl": "images/gallery_items/canon_1/image_1.jpg",
        "producer": "Canon",
        "title": "Canon EOS 800D Body Black",
        "fullPrice": 15899,
        // "salePrice": 11999,
        "article": 16875476,
        "isAvailable": true,
        "description": "Матрица 22.3 x 14.9 мм, 24.2 Мп / поддержка карт памяти SD/SDHC/SDXC / Сенсорный ЖК-дисплей с переменным углом наклона Clear View II TFT 3\" / FullHD-видео / питание от литий-ионного аккумулятора / 131 x 76.2 x 99.9 мм, 532 г",
        "type": "зеркальные",
        "equipment": "Без объектива",
        "matrix": "Полноразмерная",
        "isHit": true
    };
    const { id, mainPhotoUrl, producer, title, fullPrice, salePrice, article, isAvailable, description, type, equipment, matrix, isHit, isExpected } = currentProduct;
    const getProductAvailability = () => {
        if (isAvailable) {
            return (<span className="availText">
                В наличии
            </span>)
        } else {
            if (isExpected) {
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
        <div>
            <div className="container">
                {/* <Breadcrumb productTitle={title} /> */}
                <div className='slider-info'>
                    <div className="product-page-header">
                        <div className="product-page-header_title">{title}</div>
                        <div className="product-page-header_article">Код товара: {article}</div>
                    </div>
                    <div></div>
                </div>
                <div className="slider-info">
                    <Gallery />
                    <div className='credit'>
                        <div className='availability'>{getProductAvailability()}</div>
                        <div>
                            {salePrice ? (
                                <div className='priceContainer'>
                                    <div className='salePrice'>
                                        <span>{salePrice}</span> грн
                                </div>
                                    <div className='oldPrice'>
                                        <span>{fullPrice}</span> грн
                                </div>
                                </div>
                            ) :
                                (
                                    <div className='fullPrice'>
                                        <span>{fullPrice}</span> грн
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
                                    <p>
                                        <ul>
                                            <li>Доставка по всей Украине</li>
                                            <li>Оплата товара при получении</li>
                                            <li>Возможен самовывоз</li>
                                        </ul>
                                    </p>
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
                <Tabs description={<Description />} />
            </div>
            <Slider sliderTitle="ПОХОЖИЕ модели" />
        </div>
    )
};

export default ProductPage;
