import React from 'react';
import RegularFilter from '../RegularFilter/RegularFilter';
import {useSelector} from 'react-redux';
import {findFilterOptions} from '../../utils/utils';

const RegularFilterList = () => {
  const productsByCategory = useSelector(state => state.products.productsByCategoryAll);
  const allFilters = useSelector(state => state.filters.categoryFilters);

  let filters = 'no filters';
  if (productsByCategory.productsQuantity) {
    filters = allFilters.map(el => {
      debugger;
      return (<RegularFilter name={el.filterParam} title={el.title} filterParam={el.filterParam} checkboxesTitles={findFilterOptions(productsByCategory.products, el.filterParam)}/>);
    });
  }
  
  return (
    <div>
      {filters}
    </div>
  );
};

export default RegularFilterList;
