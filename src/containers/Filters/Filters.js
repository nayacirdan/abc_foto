import React, {useEffect} from 'react';
import RangeFilter from '../../components/RangeFilter/RangeFilter';
import './Filters.scss';
import {useDispatch, useSelector} from 'react-redux';
import RegularFilterList from '../../components/RegularFilterList/RegularFilterList';
import {getAllProductsByCategory, toggleFilterDrawer} from '../../store/actions/actions';

const FilterContainer = () => {
  const dispatch = useDispatch();
  const categoryTitle = useSelector((state) => state.categories.currentCategory.title);
  const currentCategory = useSelector(state => state.categories.currentCategory.name);
  const filterBarIsOpened = useSelector(state => state.categoryPage.filterIsOpened);

  useEffect(() => {
    dispatch(getAllProductsByCategory(currentCategory));
  }, [currentCategory, dispatch]);

  return (
    <>
      <RangeFilter/>
      <RegularFilterList/>
    </>
  );
};

export default FilterContainer;
