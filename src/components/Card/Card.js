import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Card.scss';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import cartIcon from '../../svg/cartIcon';
import { withRouter } from 'react-router';

import { setCurrentProduct, setRecentlyViewedProducts } from '../../store/actions/actions';
import { connect } from 'react-redux';

/*
const useStyles = makeStyles({
    root: {
        width: 280,
        borderRadius: 0,
        boxSizing: 'content-box',
        position: "relative",
        overflow: 'visible',
        marginBottom: 20,
        marginRight: 20,
        '&:hover': {
            // border: '1px solid rgba(81, 173, 51, 0.5)',
            boxShadow: '0px 0px 0px 1px rgba(81, 173, 51, 0.5), 0px 4px 15px rgba(0, 0, 0, 0.25)',
            cursor: 'pointer',
            boxSizing: 'content-box'
        },
        '&:hover $description, .slider-card:hover $description, .slick-active:hover $description': {
            display: 'block',
            opacity: 1,
            maxHeight: 500,
        }
    },
    media: {
        backgroundSize: 'contain',
        width: '100%'
    },
    mediaContainer: {
        height: 277,
        backgroundColor: '#F7F5F6',
        padding: 20
    },
    cartBtn: {
        borderRadius: 3,
        color: '#51AD33',
        maxWidth: 45,
        maxHeight: 45,
        "&:hover": {
            backgroundColor: '#51AD33',
            color: '#fff',
        },
        "&:hover $cartIcon": {
            color: '#fff'
        }
    },
    cartIcon: {
        color: '#51AD33',
        fontSize: 25,
        "&:hover": {
            color: '#fff'
        },
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20
    },
    fullPrize: {
        fontSize: 21,
        fontWeight: 'bold',
    },
    oldPrize: {
        textDecoration: 'line-through',
        fontSie: 14,
        color: '#A0A0A0',

    },
    salePrize: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#E91E49',
        lineHeight: 1,
    },
    title: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'left'
    },
    availText: {
        textTransform: 'lowercase',
        color: '#51AD33',
        fontSize: 14,
    },
    expectText: {
        textTransform: 'lowercase',
        color: '#E91E49',
        fontSize: 14,
    },
    notAvailText: {
        textTransform: 'lowercase',
        color: '#C2CDDD',
        fontSize: 14,
    },
    prizeContainer: {
        width: '50%'
    },
    hit: {
        width: '50%',
        backgroundColor: '#51AD33',
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: 500,
        fontSize: 14,
        padding: 5,
        position: "absolute",
        top: 11,
        left: 0,
        zIndex: 4,
    },
    description: {
        /!*marginTop:0,*!/
        fontSize: 12,
        color: '#333131',
        textAlign: 'left',
        maxHeight: '0px',
        overflow: 'hidden',
        opacity: 0,
        transition: 'max-height 600ms ease-in-out, opacity 200ms ease-in-out',
        border: '1px solid rgba(81, 173, 51, 0.5)',
        boxShadow: '0px 15px 15px rgba(0, 0, 0, 0.25)',
        cursor: 'pointer',
        borderTop: 'none',
        zIndex: 5,
        width: 'calc(100% + 2px)',
        left: -1,
        position: "absolute",
        display: 'block',
        backgroundColor: '#fff',
        padding: '0 20px 10px',
        wordWrap: 'break-word',
        top: '98%'
    }
}); */

/*


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
        history.push(`/products/filter/${itemNo}`)
        setCurrentProduct(product)
    }

    const getProductAvailability = () => {
        if (isAvailable) {
            return (<Typography component='span' className={classes.availText}>
                В наличии
            </Typography>)
        } else {
            if (isExpected) {
                return (<Typography component='span' className={classes.expectText}>
                    Ожидается
                </Typography>)
            } else {
                return (<Typography component='span' className={classes.notAvailText}>
                    Нет в наличии
                </Typography>)
            }
        }
    }
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root} onClick={(e) => {
                e.preventDefault()
                redirectToProductPage(product)
            }}>
                <Grid container className={classes.mediaContainer} >
                    <CardMedia
                        className={classes.media}
                        image={imageUrls[0]}
                    />
                </Grid>

                <CardContent className={classes.cardContent}>
                    <Typography component="h2" className={classes.title}>
                        {name}
                    </Typography>
                    <Grid container
                        direction="row"
                        justify="space-between"
                        alignItems="center">
                        {previousPrice ? (
                            <Grid container direction='column' className={classes.prizeContainer}
                                justify="flex-start"
                                alignItems="flex-start">
                                <Typography component='span' className={classes.oldPrize}>
                                    {previousPrice} грн.
                                    </Typography>
                                <Typography component='span' className={classes.salePrize}>
                                    {currentPrice} грн.
                                    </Typography>
                            </Grid>
                        ) :
                            (
                                <Typography component='span' className={classes.fullPrice}>
                                    {currentPrice} грн.
                                </Typography>
                            )
                        }

                        <IconButton color="#51AD33" aria-label="upload picture" component="span"
                            className={classes.cartBtn} disabled={!isAvailable}>
                            <ShoppingCartOutlinedIcon className={classes.cartIcon} />
                        </IconButton>
                    </Grid>
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center">

                        {getProductAvailability()}

                    </Grid>

                </CardContent>
                {isHit ? <Grid item className={classes.hit} justify='center'>
                    Хит продаж
                </Grid> : null}
                <Grid container className={classes.description}>
                    <Typography component='p' >
                        {description}
                    </Typography>
                </Grid>
            </Card>

        </>
    )
};
*/

const CardItem = (props) => {
    const { product, history, setCurrentProduct, setRecentlyViewedProducts, recentlyViewedProducts } = props;

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
        setCurrentProduct(product)
        let recentlyViewedArray = [...recentlyViewedProducts];
        if (recentlyViewedArray.find(el => el.article === product.article)) {
            recentlyViewedArray = [...recentlyViewedProducts]
        } else {
            if (recentlyViewedArray.length === 4) {
                recentlyViewedArray.push(product);
                recentlyViewedArray.shift()
            } else {
                recentlyViewedArray = [...recentlyViewedProducts, product]
            }
        };
        localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewedArray));
        setRecentlyViewedProducts(recentlyViewedArray);
        history.push(`/products/filter/${itemNo}`)
    }

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
                        e.preventDefault()
                        redirectToProductPage(product)
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
                            e.preventDefault()
                            redirectToProductPage(product)
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
                        ) :
                            (
                                <Typography component='span' className='card__full-price'>
                                    {currentPrice} грн.
                                </Typography>
                            )
                        }

                        <IconButton color="#51AD33" aria-label="upload picture" component="span"
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
        {isHit ? <Grid item className='card-hit' justify='center'>
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

const mapStateToProps = store => {
    return {
        recentlyViewedProducts: store.products.recentlyViewedProducts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setCurrentProduct: (product) => dispatch(setCurrentProduct(product)),
        setRecentlyViewedProducts: (product) => dispatch(setRecentlyViewedProducts(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardItem));
