import React from 'react';
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
import { connect } from 'react-redux';

const ProductPage = (props) => {

    const { currentProduct } = props;
    const { name, currentPrice, previousPrice, article, isAvailable, isExpected } = currentProduct;
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
                {/* <Breadcrumb productTitle={name} /> */}
                <div className='slider-info'>
                    <div className="product-page-header">
                        <div className="product-page-header_title">{name}</div>
                        <div className="product-page-header_article">Код товара: {article}</div>
                    </div>
                    <div></div>
                </div>
                <div className="slider-info">
                    <Gallery />
                    <div className='credit'>
                        <div className='availability'>{getProductAvailability()}</div>
                        <div>
                            {previousPrice ? (
                                <div className='priceContainer'>
                                    <div className='salePrice'>
                                        <span>{currentPrice}</span> грн
                                    </div>
                                    <div className='oldPrice'>
                                        <span>{previousPrice}</span> грн
                                    </div>
                                </div>
                            ) :
                                (
                                    <div className='fullPrice'>
                                        <span>{currentPrice}</span> грн
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
                    characteristics={<Characteristics />}
                    />
            </div>
            <Slider sliderTitle="ПОХОЖИЕ модели" />
            </div>
    )
};

const mapStateToProps = (store) => {
    return {
        currentProduct: store.currentProduct,
    }
}

export default connect(mapStateToProps, null)(ProductPage);
