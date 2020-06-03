import React from 'react';
import Gallery from '../../components/Gallery/Gallery';
import ContainedButtons from '../../components/Button/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SimpleExpansionPanel from '../../components/ExpansionPanel/ExpansionPanel';
import './ProductPage.scss';

const ProductPage = () => {
    const currentProduct = {
        "id": "5ec51f3d3bc90380de9985a9",
        "mainPhotoUrl": "images/gallery_items/canon_1/image_1.jpg",
        "producer": "Canon",
        "title": "Canon EOS 800D Body Black",
        "fullPrice": 15899,
        "article": 16875476,
        "isAvailable": true,
        "description": "Матрица 22.3 x 14.9 мм, 24.2 Мп / поддержка карт памяти SD/SDHC/SDXC / Сенсорный ЖК-дисплей с переменным углом наклона Clear View II TFT 3\" / FullHD-видео / питание от литий-ионного аккумулятора / 131 x 76.2 x 99.9 мм, 532 г",
        "type": "зеркальные",
        "equipment": "Без объектива",
        "matrix": "Полноразмерная",
        "isHit": true
    };

    return (
        <div className="container">
            <div className="slider-info">
                <Gallery />
                <div>
                    {currentProduct.isAvailable ? <p>в наличии</p> : <p>нет в наличии</p>}
                    <div className='purchase'>
                        <div className='purchase_block'>
                            <ContainedButtons className="green-btn"
                                text={<div className="btn btn-buy">
                                    <p className="btn_buy">Купить</p>
                                    <ShoppingCartOutlinedIcon />
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
                    <SimpleExpansionPanel />
                </div>
            </div>
        </div>
    )
};

export default ProductPage;
