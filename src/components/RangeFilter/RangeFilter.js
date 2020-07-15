import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import './RangeFilter.scss';
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Formik} from 'formik';
import {setMinMaxPrices} from '../../store/actions/actions';
import {addFilterQuery, changeStandartQuery} from '../../utils/utils';
import querystring from 'query-string';
import {useHistory, useLocation} from 'react-router';

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
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const minCategoryPrice = useSelector(state => state.categoryPage.minCategoryPrice);
  const maxCategoryPrice = useSelector(state => state.categoryPage.maxCategoryPrice);
  const queryFiltersObj = useSelector(state => state.filters.queriesObj);

  const [values, setValues] = React.useState({
    minPrice: minCategoryPrice,
    maxPrice: maxCategoryPrice
  });
  
  useEffect(() => {
    setValues({
      minPrice: minCategoryPrice,
      maxPrice: maxCategoryPrice
    });
  }, [minCategoryPrice, maxCategoryPrice]);
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
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('values vvvvvvvvv', values.minPrice, values.maxPrice);
    dispatch(setMinMaxPrices(values.minPrice, values.maxPrice));
    const newQueryObj = changeStandartQuery(queryFiltersObj, 'minPrice', values.minPrice);
    const newQueryObj2 = changeStandartQuery(newQueryObj, 'maxPrice', values.maxPrice);
    const newQueryStr = querystring.stringify(newQueryObj2, {arrayFormat: 'comma'});

    history.push(`${location.pathname}?${newQueryStr}`);
  };

  return (
    <div className='range-filter'>
      <h3 className='filter-title'>По цене</h3>
  
      <form onSubmit={ev => handleSubmit(ev)} className='range-filter__inputs'>
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
        <Button variant="contained" className='btn btn-filter' type='submit'>
        OK
        </Button>
      </form>

      <div className='range-filer__range-line'>
        <div>
          <Slider
            value={[values.minPrice, values.maxPrice]}
            onChange={handleChangeSlider}
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            min={minCategoryPrice}
            max={maxCategoryPrice}
          />
        </div>
      </div>

    </div>
  );
};

export default RangeFilter;