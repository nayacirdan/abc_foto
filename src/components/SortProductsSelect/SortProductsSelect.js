import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './SortProductsSelect.scss';
import {useHistory, useRouteMatch, useLocation} from 'react-router';
import {connect, useDispatch, useSelector} from 'react-redux';
import {setCurrentPage, setSortProducts} from '../../store/actions/actions';
import {Link} from 'react-router-dom';

const SortProductSelect = ({sortProducts}) => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const sortBy = useSelector(state => state.categoryPage.sortBy);

  const searchParams = new URLSearchParams(location.search);

  /*  const handleChange = (event) => {
    // debugger;
    /!*    if (searchParams.has('sort')) {
      searchParams.delete('sort');
    }
    searchParams.append('sort', event.target.value);

    console.log('searchParams', searchParams.toString()); *!/
   
    /!*   history.push(`/products/filter?${searchParams}`); *!/
/!*    dispatch(setSortProducts(event.target.value));
    dispatch(setCurrentPage(1));*!/
  }; */

  const handleChange = (value) => {
    dispatch(setSortProducts(value));
    dispatch(setCurrentPage(1));
  };
  return (
    <div className='sort-products'>
      <FormControl className='form-sort'>
        <InputLabel className='form-sort__label' id="customized-select-label">Сортировать по</InputLabel>
        <Select
          labelId="customized-select-label"
          id="customized-select"
          value={sortBy}
          /*        onChange={handleChange} */
        >

          {/* <MenuItem value='currentPrice'>
            <Link to={`/products/filter?categories=dslr_cameras&sort=${sortBy}`}
              onClick={() => handleChange('currentPrice')}>
            Снижению цены
            </Link>
          </MenuItem> */}
          <MenuItem value='currentPrice'>
            <Link to={location => {
              const query = new URLSearchParams(location.search);
              query.set('sort', sortBy);
              const queryString = query.toString();
              return {...location, search: queryString};
            }}
            onClick={() => handleChange('currentPrice')}>
            Снижению цены
            </Link>
          </MenuItem>

          <MenuItem value='-currentPrice'>
            <Link to={location => {
              const query = new URLSearchParams(location.search);
              query.set('sort', sortBy);
              const queryString = query.toString();
              return {...location, search: queryString};
            }}
            onClick={() => handleChange('-currentPrice')}>
              Возрастанию цены
            </Link>
          </MenuItem>
          
          {/* <MenuItem value='-currentPrice'>
            <Link to={`/products/filter?categories=dslr_cameras&sort=${sortBy}`}
              onClick={() => handleChange('-currentPrice')}>
              Возрастанию цены
            </Link>
          </MenuItem> */}

        </Select>
      </FormControl>
    </div>
  );
};

const mapStoreToProps = (store) => {
  return {
    sortProducts: store.categoryPage.sortBy
  };
};

export default connect(mapStoreToProps)(SortProductSelect);
