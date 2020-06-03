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
                        <div>
                            <div className="delivert-item">
                                <IconButton className='delivery-icon' component='span'><StorefrontIcon /></IconButton>
                                <Typography component='span'>Самовывоз с магазина</Typography>
                                <Typography component='span' className="delivert-item_free">Бесплатно</Typography>
                            </div>
                            <div className="delivert-item">
                                <IconButton className='delivery-icon' component='span'><DirectionsWalkIcon /></IconButton>
                                <Typography component='span'>Самовывоз из Новой Почты</Typography>
                                <Typography component='span' className="delivert-item_free">Бесплатно</Typography>
                            </div>
                            <div className="delivert-item">
                                <IconButton className='delivery-icon' component='span'><CardGiftcardIcon /></IconButton>
                                <Typography component='span'>Курьер по вашему адресу</Typography>
                                <Typography component='span' className='delivert-item_price'>59 ₴</Typography>
                            </div>
                        </div>
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
};

export default SimpleExpansionPanel;
