import React from 'react';
import {Route} from "react-router-dom";
import PageCategory from "../PagesMain/PageCategory";

const CategoryRoutes = ({match}) => {
    return (
        <div>
            <Route path={`${match.path}/:categoryName`}
                   render={({match})=>(<PageCategory match={match}/>)}
            />
        </div>
    );
};

export default CategoryRoutes;
