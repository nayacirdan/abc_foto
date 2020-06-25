import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './SortProductsSelect.scss'
import {useHistory, useRouteMatch, useLocation} from 'react-router';
import {connect, useDispatch} from "react-redux";
import {setCurrentPage, setSortProducts} from "../../store/actions/actions";





const SortProductSelect = ({sortProducts}) => {

    let history=useHistory();
    let location=useLocation();
    const dispatch=useDispatch();

    const searchParams = new URLSearchParams(location.search);


    const handleChange = (event) => {
        // debugger;
        if(searchParams.has('sort')) {
            searchParams.delete('sort');
        }
        searchParams.append('sort', event.target.value);

        console.log('searchParams',searchParams.toString());
        dispatch(setSortProducts(event.target.value));
        dispatch(setCurrentPage(1));
        history.push(`/products/filter?${searchParams}`);
    };

    return (
        <div className='sort-products'>
            <FormControl className='form-sort'>
                <InputLabel className='form-sort__label' id="customized-select-label">Сортировать по</InputLabel>
                <Select
                    labelId="customized-select-label"
                    id="customized-select"
                    value={sortProducts}
                    onChange={handleChange}
                >
                    <MenuItem value='-currentPrice'>Снижению цены</MenuItem>
                    <MenuItem value='currentPrice'>Возрастанию цены</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

const mapStoreToProps=(store)=>{
    return {
        sortProducts: store.categoryPage.sortBy
    }
}

export default connect(mapStoreToProps)(SortProductSelect);

