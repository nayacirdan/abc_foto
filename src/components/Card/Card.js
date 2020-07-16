import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Card.scss';
// import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
// import cartIcon from '../../svg/cartIcon';
import { withRouter } from 'react-router';

import { setCurrentProduct } from '../../store/actions/actions';
import { connect } from 'react-redux';

import setToLocalStorage from '../../utils/localStorage';

const CardItem = (props) => {
  const { product, history, setCurrentProduct } = props;

  const {
    imageUrls,
    name,
    isAvailable,
    currentPrice,
    previousPrice,
    isHit,
    isExpected,
    description,
    itemNo
  } = product;

  const redirectToProductPage = (product) => {
    setCurrentProduct(product);
    setToLocalStorage(product);
    history.push(`/products/filter/${itemNo}`);
  };

  const getProductAvailability = () => {
    if (isAvailable) {
      return (<Typography component='span' className='card__available'>
                В наличии
      </Typography>);
    } else {
      if (isExpected) {
        return (<Typography component='span' className='card__expect'>
                    Ожидается
        </Typography>);
      } else {
        return (<Typography component='span' className='card__not-available'>
                    Нет в наличии
        </Typography>);
      }
    }
  };

  return (
    <>
      <Card className='card' >
        <Grid container className='card__media-container'
          onClick={(e) => {
            e.preventDefault();
            redirectToProductPage(product);
          }}
        >
          <CardMedia
            className='card__media'
            image={imageUrls[0]}
          />
        </Grid>

        <CardContent className='card__content'>
          <Typography component="h2" className='card__title'
            onClick={(e) => {
              e.preventDefault();
              redirectToProductPage(product);
            }}
          >
            {name}
          </Typography>
          <Grid container
            direction="row"
            justify="space-between"
            alignItems="center">
            {previousPrice ? (
              <Grid container direction='column' className='card__price-container'
                justify="flex-start"
                alignItems="flex-start">
                <Typography component='span' className='card__old-price'>
                  {previousPrice} грн.
                </Typography>
                <Typography component='span' className='card__sale-price'>
                  {currentPrice} грн.
                </Typography>
              </Grid>
            )
              : (
                <Typography component='span' className='card__full-price'>
                  {currentPrice} грн.
                </Typography>
              )
            }

            <IconButton aria-label="upload picture" component="span"
              className='card__cart-btn' disabled={!isAvailable} >
              <ShoppingCartOutlinedIcon className='card__cart-icon' />
            </IconButton>
          </Grid>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center">

            {getProductAvailability()}

          </Grid>

        </CardContent>
        {isHit ? <Grid container className='card-hit' justify='center'>
                    Хит продаж
        </Grid> : null}
        <Grid container className='card__description'>
          <Typography component='p' >
            {description}
          </Typography>
        </Grid>
      </Card>

    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentProduct: (product) => dispatch(setCurrentProduct(product))
  };
};

export default connect(null, mapDispatchToProps)(withRouter(CardItem));
