import React, {useEffect} from 'react';
import RangeFilter from '../../components/RangeFilter/RangeFilter';
import './Filters.scss';
import RegularFilter from '../../components/RegularFilter/RegularFilter';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router';
import {Link} from 'react-router-dom';
import PageCategory from '../../HOCs/PageCategory/PageCategory';
import RegularFilterList from '../../components/RegularFilterList/RegularFilterList';
import {getAllProductsByCategory} from '../../store/actions/actions';
import {Formik} from 'formik';

const FilterContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const perPage = useSelector(state => state.categoryPage.productsPerPage);
  const currentPage = useSelector(state => state.categoryPage.currentPage);
  const sortBy = useSelector(state => state.categoryPage.sortBy);
  const filterString = useSelector(state => state.filters.locationFilters);
  
  const categoryTitle = useSelector((state) => state.categories.currentCategory.title);
  const currentCategory = useSelector(state => state.categories.currentCategory.name);

  useEffect(() => {
    dispatch(getAllProductsByCategory(currentCategory));
  }, [currentCategory, dispatch]);

  return (
    <div className='filters-container'>
      <h2 className='category-title'>{categoryTitle}</h2>
      <RangeFilter/>
      {/*  <RegularFilter title='По типу' checkboxesTitles={['зеркальные', 'компактные', 'системные']}/>
      <RegularFilter title='По производителю' checkboxesTitles={['Canon', 'Fujifilm', 'Nikon', 'Olympus', 'Panasonic', 'Pentax', 'Sony']}/>
      <RegularFilter title='Комплектация' checkboxesTitles={['Без объектива', 'С объективом']}/>
      <RegularFilter title='Матрица' checkboxesTitles={['CMOS', 'Кропнутая', 'Полноразмерная']}/> */}

      <Formik initialValues={null} onSubmit={(values) => console.log(values)}>
        {({values, handleSubmit, setFieldValue}) => {
          return (<form onSubmit={(ev) => {
            ev.preventDefault();
            console.log(ev, ev.target, ev.currentTarget);
          }}>
            <RegularFilterList/>
            <Button type='submit'>History push</Button>
          </form>);
        }}

      </Formik>
      <Link to={location => {
        const query = new URLSearchParams(location.search);
        query.set('sort', '-currentPrice');
        query.set('categories', 'instant_cameras');
        const queryString = query.toString();
        return {...location, search: queryString};
      }
      }><Button>Location</Button></Link>
      <Link to={`/products/filter?${filterString}`}><Button>Filter Submit</Button></Link>
      <Button onClick={() => history.push('/products/filter?categories=dslr_cameras&sort=currentPrice')}>History push</Button>
      <Link to={'/products/filter?categories=dslr_cameras&brand=Nikon,Pentax'}><Button>Brands</Button></Link>
    </div>
  );
};

export default FilterContainer;
