import React from 'react';
import { connect } from 'react-redux';

const Characteristics = (props) => {

    const { currentProduct } = props;
    const { matrix, type } = currentProduct;
    return (
        <div>
            <div className='characteristics'>
                <div>
                    <div>Матрица фотоаппарата</div>
                    <div>{matrix}</div>
                </div>
                <div>
                    <div>Тип</div>
                    <div>{type}</div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (store) => {
    return {
        currentProduct: store.currentProduct,
    }
}

export default connect(mapStateToProps, null)(Characteristics);
