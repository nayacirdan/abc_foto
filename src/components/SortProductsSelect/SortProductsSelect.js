import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './SortProductsSelect.scss'
import {useHistory, useRouteMatch, useLocation} from 'react-router';





const SortProductSelect = () => {
    const [sortProducts, setSortProducts] = React.useState(null);
    let history=useHistory();
    let location=useLocation();

    const searchParams = new URLSearchParams(location.search);


    const handleChange = (event) => {

        if(searchParams.has('sort')) {
            searchParams.delete('sort');
        }
        searchParams.append('sort', event.target.value);

        console.log('searchParams',searchParams.toString());
        setSortProducts(event.target.value);
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
                    <MenuItem value='currentPrice'>Снижению цены</MenuItem>
                    <MenuItem value='-currentPrice'>Возрастанию цены</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default SortProductSelect;

