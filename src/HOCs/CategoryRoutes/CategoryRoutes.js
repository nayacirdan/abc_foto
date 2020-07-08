import React from 'react';
import {Route} from 'react-router-dom';
import PageCategory from '../PageCategory/PageCategory';

const CategoryRoutes = ({match}) => {
  return (
    <div>
      <Route path={`${match.path}`}
        component={PageCategory}
      />
    </div>
  );
};

export default CategoryRoutes;
