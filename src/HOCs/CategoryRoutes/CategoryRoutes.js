import React from 'react';
import {Route} from "react-router-dom";
import PageCategory from "../PagesMain/PageCategory";

const CategoryRoutes = ({match, location}) => {
    const searchParams= new URLSearchParams(location.search);
    console.log('searchParams', searchParams.toString());
    console.log('location', location);
    console.log('location.search', location.search);
    return (
        <div>
            <Route  path={`${match.path}`}
                   render={({match})=>(<PageCategory match={match} searchParams={searchParams}/>)}
            />
        </div>
    );
};

export default CategoryRoutes;
