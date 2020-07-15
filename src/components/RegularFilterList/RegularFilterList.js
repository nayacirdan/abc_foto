import React, {useEffect} from 'react';
import RegularFilter from '../RegularFilter/RegularFilter';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {getFiltersByCategory} from '../../store/actions/actions';
import {findFilterOptions} from '../../utils/utils';

const RegularFilterList = () => {
  const dispatch = useDispatch();
  const currentCategory = useSelector(state => state.categories.currentCategory.name);
  const productsByCategory = useSelector(state => state.products.productsByCategory);
  
  const allFilters = useSelector(state => state.filters.categoryFilters);
  
  /*  useEffect(() => {
    if (allFilters.length && productsByCategory.productsQuantity) {
      dispatch(addFiltersOptions(allFilters, productsByCategory));
    }
  }, [allFilters, dispatch, productsByCategory]); */

  let filters = 'no filters';
  if (productsByCategory.productsQuantity) {
    filters = allFilters.map(el => {
      return (<RegularFilter name={el.filterParam} title={el.title} filterParam={el.filterParam} checkboxesTitles={findFilterOptions(productsByCategory.products, el.filterParam)}/>);
    });
  }
  
  return (
    <div>
      {/*      <RegularFilter title='По типу' checkboxesTitles={['зеркальные', 'компактные', 'системные']}/>
      <RegularFilter title='По производителю' checkboxesTitles={['Canon', 'Fujifilm', 'Nikon', 'Olympus', 'Panasonic', 'Pentax', 'Sony']}/> */}
      {filters}
    </div>
  );
};

export default RegularFilterList;
