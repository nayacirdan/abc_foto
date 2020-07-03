import React from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { searchChange, getProductsBySearch, getProducts, setCurrentProduct } from '../../../store/actions/actions';
import { connect } from 'react-redux';

import './Autocomplete.scss';

const SearchBar = (props) => {
    const { history, products, getProducts, searchChange, getProductsBySearch, setCurrentProduct } = props

    const onChangeHandler = (e) => {
        searchChange(e.target.value)
        getProductsBySearch({ "query": e.target.value.trim() })
    }
    const filterProductsHandler = (e, value) => {
        if (value !== null) {
            setCurrentProduct(value)
            history.push(`/products/filter/${value.itemNo}`)
        }
    }
    return (
        <div>
            <Autocomplete
                id="combo-box-demo"
                options={products}
                getOptionLabel={(option) => option.name}
                onChange={filterProductsHandler}

                style={{ width: 500 }}
                renderInput={(params) => <TextField
                    {...params}
                    label="Поиск товара"
                    variant="outlined"
                    onChange={onChangeHandler}
                    onFocus={getProducts}
                />}
            />
        </div>
    )
};

const mapStateToProps = store => {
    return {
        products: store.products.products
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getProducts: () => dispatch(getProducts()),
        searchChange: (text) => dispatch(searchChange(text)),
        getProductsBySearch: (text) => dispatch(getProductsBySearch(text)),
        setCurrentProduct: (product) => dispatch(setCurrentProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
