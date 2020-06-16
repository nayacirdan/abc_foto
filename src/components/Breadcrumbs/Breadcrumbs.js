import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './Breadcrumbs.scss'

const BreadcrumbsWrapper = () => {

    const handleClick=()=>{
        console.log('bradcrumb clicked')
    }

    return (
        <div className='breadcrumbs'>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    Главная
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    Цифровая техника
                </Link>
                <Typography color="textPrimary">Фотоаппараты</Typography>
            </Breadcrumbs>
        </div>
    );
};

export default BreadcrumbsWrapper;
