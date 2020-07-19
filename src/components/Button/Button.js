import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

export default function ContainedButtons (props) {
  const classes = useStyles();
  const { className, btnType, onClick, text, isDisabled } = props;

  return (
    <div className={classes.root}>
      <Button variant="contained" className={className} onClick={onClick} type={btnType} disabled={isDisabled} >
        {text}
      </Button>
    </div>
  );
};

ContainedButtons.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  onClick: PropTypes.func,
  className: PropTypes.string.isRequired
};
