import React, {useEffect} from 'react';
import {useLocation, useHistory} from 'react-router';
import {useDispatch} from 'react-redux';
import App from '../../App';
import querystring from 'query-string';

const AppContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
    
  useEffect(() => {
    console.log(location.pathname);
    debugger;
    if (location.pathname === '/products/filter') {
      const query = new URLSearchParams(location.search);
      console.log('query', query.toString());

      const querStr = querystring.parse(location.search, {arrayFormat: 'comma'});
      console.log('querStr', querStr);
    }
  }, [location.pathname, location.search]);
  console.log(location);
    
  return (
    <App/>
  );
};

export default AppContainer;
