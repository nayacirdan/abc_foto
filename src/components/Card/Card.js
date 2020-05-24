import React from "react";
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import './Card.scss'
import {makeStyles} from '@material-ui/core/styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";



const useStyles = makeStyles({
    root: {
        maxWidth: 280,
        borderRadius: 0,
        boxSizing:'border-box',
        '&:hover': {
            border: '1px solid rgba(81, 173, 51, 0.5)',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)',
            cursor: 'pointer'
        },
        '&:hover $description':{
            maxHeight:'300px',
            opacity:1,
            marginTop:20,
            textOverflow:'ellipsis'
        },
        position:'relative',
    },
    media: {
        backgroundSize: 'contain',
        width:'100%'
    },
    mediaContainer:{
        height: 277,
        backgroundColor: '#F7F5F6',
        padding:20
    },
    cartBtn: {
        borderRadius: 3,
        color: '#51AD33',
        maxWidth: 45,
        maxHeight: 45,
        "&:hover": {
            backgroundColor: '#51AD33',
            color: '#fff'
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
    oldPrize:{
        textDecoration:'line-through',
        fontSie:14,
        color:'#A0A0A0',

    },
    salePrize:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'#E91E49',
        lineHeight:1,
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
    expectText:{
        textTransform: 'lowercase',
        color: '#E91E49',
        fontSize: 14,
    },
    notAvailText:{
        textTransform: 'lowercase',
        color: '#C2CDDD',
        fontSize: 14,
    },
    prizeContainer:{
        width:'50%'
    },
    hit:{
        width:'50%',
        backgroundColor:'#51AD33',
        color:'#FFF',
        textTransform:'uppercase',
        fontWeight:500,
        fontSize:14,
        padding:5,
        position:"absolute",
        top:11,
        left:0,
        zIndex:200,
    },
    description:{
        marginTop:0,
        fontSize:12,
        color:'#333131',
        textAlign:'left',
        maxHeight:0,
        overflow:'hidden',
        opacity:0,
        transition: '500ms ease-out',
    }
});


const CardItem = (props) => {
    const {product} = props;

    const {
        mainPhotoUrl,
        title,
        isAvailable,
        fullPrice,
        salePrice,
        isHit,
        isExpected,
        description
    } = product;

    const getProductAvailability=()=>{
        if(isAvailable) {
            return (<Typography component='span' className={classes.availText}>
                В наличии
            </Typography>)
        } else {
            if(isExpected) {
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
        <Card className={classes.root}>
            <Grid container className={classes.mediaContainer} >
                <CardMedia
                    className={classes.media}
                    image={mainPhotoUrl}
                    title="Canon"/>
            </Grid>


            <CardContent className={classes.cardContent}>
                <Typography component="h2" className={classes.title}>
                    {title}
                </Typography>
                <Grid container
                      direction="row"
                      justify="space-between"
                      alignItems="flex-end">
                    {salePrice ? (
                        <Grid container direction='column' className={classes.prizeContainer}
                              justify="flex-start"
                              alignItems="flex-start">
                            <Typography component='span' className={classes.oldPrize}>
                                {fullPrice} грн.
                            </Typography>
                            <Typography component='span' className={classes.salePrize}>
                                {salePrice} грн.
                            </Typography>
                        </Grid>
                        ) :
                        (
                            <Typography component='span' className={classes.fullPrice}>
                                {fullPrice} грн.
                            </Typography>
                        )
                    }

                    <IconButton color="#51AD33" aria-label="upload picture" component="span"
                                className={classes.cartBtn}  disabled={!isAvailable}>
                        <ShoppingCartOutlinedIcon className={classes.cartIcon}/>
                    </IconButton>
                </Grid>
                <Grid container
                      direction="row"
                      justify="flex-start"
                      alignItems="center">

                    {getProductAvailability()}

                </Grid>
                <Grid container className={classes.description}>
                    <Typography component='p' >
                        {description}
                    </Typography>
                </Grid>
            </CardContent>
            {isHit? <Grid item className={classes.hit} justify='center'>
                Хит продаж
            </Grid> : null}

        </Card>

    )
}

export default CardItem;


