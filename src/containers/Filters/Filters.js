import React from 'react';
import RangeFilter from '../../components/RangeFilter/RangeFilter';
import './Filters.scss';
import RegularFilter from '../../components/RegularFilter/RegularFilter';
import {useSelector} from 'react-redux';
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router';
import {Link} from 'react-router-dom';
import PageCategory from '../../HOCs/PageCategory/PageCategory';

const FilterContainer = () => {
  const history = useHistory();

  const perPage = useSelector(state => state.categoryPage.productsPerPage);
  const currentPage = useSelector(state => state.categoryPage.currentPage);
  const sortBy = useSelector(state => state.categoryPage.sortBy);

  const categoryTitle = useSelector((state) => state.categories.currentCategory.title);
  return (
    <div className='filters-container'>
      <h2 className='category-title'>{categoryTitle}</h2>
      <RangeFilter/>
      <RegularFilter title='По типу' checkboxesTitles={['зеркальные', 'компактные', 'системные']}/>
      <RegularFilter title='По производителю' checkboxesTitles={['Canon', 'Fujifilm', 'Nikon', 'Olympus', 'Panasonic', 'Pentax', 'Sony']}/>
      <RegularFilter title='Комплектация' checkboxesTitles={['Без объектива', 'С объективом']}/>
      <RegularFilter title='Матрица' checkboxesTitles={['CMOS', 'Кропнутая', 'Полноразмерная']}/>

      <Link to={`/products/filter?categories=dslr_cameras&sort=${sortBy}`}><Button>Location</Button></Link>

    </div>
  );
};

export default FilterContainer;
