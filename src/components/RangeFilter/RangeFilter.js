import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './RangeFilter.scss'
import Button from "@material-ui/core/Button";


function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <>
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
        />

        </>
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};








function valuetext(value) {
    return `${value}°C`;
}

const RangeLine=()=> {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Slider
                value={value}
                onChange={handleChange}
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}

const RangeFilter=()=> {
    const [values, setValues] = React.useState({
        minPrice: 5,
        maxPrice: 10
    });

    const handleChange = (event) => {
        const {name, value}=event.target;
        console.log('event.target',event.target);
        setValues({
            ...values,
            [name]: value,
        });
    };

    return (
        <div className='range-filter'>
            <h3 className='filter-title'>По цене</h3>
            <div className='range-filter__inputs'>
                <TextField
                    className='price-input price-input__min'
                    label=""
                    variant='outlined'
                    value={values.minPrice}
                    onChange={handleChange}
                    name="minPrice"
                    id="minPrice"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />
                <div className='dash-container'>
                    <div className='dash'></div>
                </div>
                <TextField
                    className='price-input price-input__max'
                    label=""
                    variant='outlined'
                    value={values.maxPrice}
                    onChange={handleChange}
                    name="maxPrice"
                    id="maxPrice"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />
                <Button variant="contained" className='btn btn-filter'>
                    OK
                </Button>
            </div>
            <div className='range-filer__range-line'>
                <RangeLine/>
            </div>

        </div>
    );
}

export default RangeFilter;