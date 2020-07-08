import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import './RangeFilter.scss';
import Button from '@material-ui/core/Button';

function NumberFormatCustom (props) {
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
              value: values.value
            }
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
  onChange: PropTypes.func.isRequired
};

function valuetext (value) {
  return `${value}°C`;
}

const RangeFilter = () => {
  const [values, setValues] = React.useState({
    minPrice: 5,
    maxPrice: 10
  });

  const handleChangeInputs = (event) => {
    const {name, value} = event.target;
    console.log('event.target', event.target);
    setValues({
      ...values,
      [name]: Number(value)
    });
  };

  const handleChangeSlider = (event, newValues) => {
    console.log('slider ev target', event.target);
    console.log('newValues', newValues);

    const newArr = newValues.sort(function compareNumbers (a, b) {
      return a - b;
    });
    console.log('newArr', newValues);
    setValues({
      minPrice: newArr[0],
      maxPrice: newArr[1]
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
          onChange={handleChangeInputs}
          name="minPrice"
          id="minPrice"
          InputProps={{
            inputComponent: NumberFormatCustom
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
          onChange={handleChangeInputs}
          name="maxPrice"
          id="maxPrice"
          InputProps={{
            inputComponent: NumberFormatCustom
          }}
        />
        <Button variant="contained" className='btn btn-filter'>
                    OK
        </Button>
      </div>
      <div className='range-filer__range-line'>
        <div>
          <Slider
            value={[values.minPrice, values.maxPrice]}
            onChange={handleChangeSlider}
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            min={0}
            max={14000}
          />
        </div>
      </div>

    </div>
  );
};

export default RangeFilter;