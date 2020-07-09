import React from 'react';
import RangeFilter from '../../components/RangeFilter/RangeFilter';
import './Filters.scss';
import RegularFilter from '../../components/RegularFilter/RegularFilter';
import {useSelector} from 'react-redux';

const FilterContainer = () => {
  const categoryTitle = useSelector((state) => state.categories.currentCategory.title);
  return (
    <div className='filters-container'>
      <h2 className='category-title'>{categoryTitle}</h2>
      <RangeFilter/>
      <RegularFilter title='По типу' checkboxesTitles={['зеркальные', 'компактные', 'системные']}/>
      <RegularFilter title='По производителю' checkboxesTitles={['Canon', 'Fujifilm', 'Nikon', 'Olympus', 'Panasonic', 'Pentax', 'Sony']}/>
      <RegularFilter title='Комплектация' checkboxesTitles={['Без объектива', 'С объективом']}/>
      <RegularFilter title='Матрица' checkboxesTitles={['CMOS', 'Кропнутая', 'Полноразмерная']}/>
    </div>
  );
};

export default FilterContainer;
