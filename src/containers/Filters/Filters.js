import React, {useEffect} from 'react';
import RangeFilter from '../../components/RangeFilter/RangeFilter';
import './Filters.scss';
import {useDispatch, useSelector} from 'react-redux';
import RegularFilterList from '../../components/RegularFilterList/RegularFilterList';
import {getAllProductsByCategory, toggleFilterDrawer} from '../../store/actions/actions';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import FilterListIcon from '@material-ui/icons/FilterList';
import {Button} from '@material-ui/core';

const FilterContainer = () => {
  const dispatch = useDispatch();
  const categoryTitle = useSelector((state) => state.categories.currentCategory.title);
  const currentCategory = useSelector(state => state.categories.currentCategory.name);
  const filterBarIsOpened = useSelector(state => state.categoryPage.filterIsOpened);

  useEffect(() => {
    dispatch(getAllProductsByCategory(currentCategory));
  }, [currentCategory, dispatch]);

  return (
    <Drawer
      className='filters-container'
      anchor='left'
      open={filterBarIsOpened}
      variant='temporary'
      onClose={() => dispatch(toggleFilterDrawer(false))}
    >
      <Button type={'button'}
        onClick={() => dispatch(toggleFilterDrawer(false))}
        color="primary"
        startIcon={<ChevronLeftIcon color={'primary'}/>}
        className='btn-hide'>
                Скрыть фильтры
      </Button>
      <RangeFilter/>
      <RegularFilterList/>
    </Drawer>
  );
};

export default FilterContainer;
