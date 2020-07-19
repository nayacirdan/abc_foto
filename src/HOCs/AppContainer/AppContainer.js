import React, {useCallback, useEffect} from 'react';
import {useLocation, useHistory} from 'react-router';
import {useDispatch} from 'react-redux';
import App from '../../App';
import querystring from 'query-string';
import {setIsDesktop} from '../../store/actions/actions';

const AppContainer = () => {
  const dispatch = useDispatch();

  const handleWindowResize = useCallback(() => {
    if (window.innerWidth <= 1200) {
      dispatch(setIsDesktop(true));
    } else {
      dispatch(setIsDesktop(false));
    }
  }, [dispatch]);

  useEffect(() => {
    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [dispatch, handleWindowResize]);

  return (
    <App/>
  );
};

export default AppContainer;
