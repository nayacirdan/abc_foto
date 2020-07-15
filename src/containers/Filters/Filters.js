import React, {useEffect} from 'react';
import RangeFilter from '../../components/RangeFilter/RangeFilter';
import './Filters.scss';
import {useDispatch, useSelector} from 'react-redux';
import RegularFilterList from '../../components/RegularFilterList/RegularFilterList';
import {getAllProductsByCategory} from '../../store/actions/actions';

const FilterContainer = () => {
  const dispatch = useDispatch();
  const categoryTitle = useSelector((state) => state.categories.currentCategory.title);
  const currentCategory = useSelector(state => state.categories.currentCategory.name);

  useEffect(() => {
    dispatch(getAllProductsByCategory(currentCategory));
  }, [currentCategory, dispatch]);

  return (
    <div className='filters-container'>
      <h2 className='category-title'>{categoryTitle}</h2>
      <RangeFilter/>
      <RegularFilterList/>
    </div>
  );
};

export default FilterContainer;
