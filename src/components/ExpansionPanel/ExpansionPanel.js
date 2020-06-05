import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import StorefrontIcon from '@material-ui/icons/Storefront';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

import './ExpansionPanel.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        color: "#00B0FF",
        fontFamily: "Roboto",
        fontSize: "14px",
        lineHeight: "160%",
        letterSpacing: "-0.03em"
    },
}));

function SimpleExpansionPanel() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Условия доставки и оплаты</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        <Typography component='div' className='delivery'>
                            <Typography component='div' className="delivery_item">
                                <IconButton component='span' className='delivery_item-icon'><StorefrontIcon /></IconButton>
                                <Typography component='span' className='delivery_item-text'>Самовывоз с магазина</Typography>
                                <Typography component='span' className="delivery_item-free">Бесплатно</Typography>
                            </Typography>
                            <Typography component='div' className="delivery_item">
                                <IconButton component='span' className='delivery_item-icon'><DirectionsWalkIcon /></IconButton>
                                <Typography component='span' className='delivery_item-text'>Самовывоз из Новой Почты</Typography>
                                <Typography component='span' className="delivery_item-free">Бесплатно</Typography>
                            </Typography>
                            <Typography component='div' className="delivery_item">
                                <IconButton component='span' className='delivery_item-icon'><CardGiftcardIcon /></IconButton>
                                <Typography component='span' className='delivery_item-text'>Курьер по вашему адресу</Typography>
                                <Typography component='span' className='delivery_item-price'>59 ₴</Typography>
                            </Typography>
                        </Typography>
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
};

export default SimpleExpansionPanel;
