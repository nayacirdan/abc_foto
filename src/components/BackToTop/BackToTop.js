import React from 'react';
import { Fab, Zoom, useScrollTrigger, makeStyles } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndex: '20',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));
const ScrollTop = props => {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 300
  });
  const handleClick = event => {
    // eslint-disable-next-line
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
};
const BackToTop = props => {
  return (
    <div id="back-to-top-anchor">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};
export default BackToTop;