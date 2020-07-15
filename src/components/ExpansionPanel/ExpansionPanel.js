import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  elevation1: {
    boxShadow: 'none'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: '#00B0FF',
    fontFamily: 'Roboto',
    // fontSize: "14px",
    lineHeight: '160%',
    letterSpacing: '-0.03em'
  },
  ExpandMoreIcon: {
    color: '#00B0FF !important'
  }
}));

function SimpleExpansionPanel (props) {
  const { title, main, readMoreClass } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className={classes.elevation1}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.ExpandMoreIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={readMoreClass}
        >
          <Typography className={classes.heading}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component='div'>
            {main}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SimpleExpansionPanel;
