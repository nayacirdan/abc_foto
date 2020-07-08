import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
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
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className={classes.ExpandMoreIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={readMoreClass}
        >
          <Typography className={classes.heading}>{title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography component='div'>
            {main}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default SimpleExpansionPanel;
