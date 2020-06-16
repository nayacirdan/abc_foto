import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './SortProductsSelect.scss'


const SortProductSelect = () => {
    const [sortProducts, setSortProducts] = React.useState('lowFirst');
    const handleChange = (event) => {
        setSortProducts(event.target.value);
    };

    return (
        <div className='sort-products'>
            <FormControl className='form-sort'>
                <InputLabel className='form-sort__label' id="demo-customized-select-label">Сортировать по</InputLabel>
                <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={sortProducts}
                    onChange={handleChange}
                >
                    <MenuItem value='lowFirst'>Снижению цены</MenuItem>
                    <MenuItem value='highFirst'>Возрастанию цены</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default SortProductSelect;

