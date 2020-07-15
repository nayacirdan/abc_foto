import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick (event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb (props) {
  const {productTitle} = props;
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="textPrimary" href="/" onClick={handleClick}>
      Главная
      </Link>
      <Link color="textPrimary" href="/getting-started/installation/" onClick={handleClick}>
      Фотоаппараты
      </Link>
      <Link
        color="inherit"
        href="/components/breadcrumbs/"
        onClick={handleClick}
        aria-current="page"
      >
        {productTitle}
      </Link>
    </Breadcrumbs>
  );
}