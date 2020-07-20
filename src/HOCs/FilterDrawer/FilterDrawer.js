import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toggleFilterDrawer} from '../../store/actions/actions';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {Button} from '@material-ui/core';
import FilterContainer from '../../containers/Filters/Filters';

const FilterDrawer = () => {
  const dispatch = useDispatch();

  const filterBarIsOpened = useSelector(state => state.categoryPage.filterIsOpened);

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
      <FilterContainer/>
    </Drawer>
  );
};

export default FilterDrawer;
