import React from 'react';
import './Navigation.scss';
import LinksListCatalog from '../../../HOCs/CatalogLinks/LinksListCatalog';

const Navigation = () => {
  return (
    <nav className="nav">
      <LinksListCatalog />
    </nav>
  );
};

export default React.memo(Navigation);