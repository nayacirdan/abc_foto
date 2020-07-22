import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import './ConfirmOrderModal.scss';
import {useDispatch, useSelector} from 'react-redux';
import {toggleSubscribeFailedModal} from '../../store/actions/actions';

function getModalStyle () {
  const top = 50;
  const left = 50;

  return {
    top: '50%',
    left: '50%',
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    minWidth: 320,
    height: 300,
    backgroundColor: '#F9F9FB',
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    outline: 'none'
  }
}));

export default function SubscribeFailedModal () {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.modals.subscribeFailed);

  const handleClose = () => {
    dispatch(toggleSubscribeFailedModal(false));
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 className="simple-modal-title" style={{textAlign: 'center'}}>Подписка не удалась</h2>
      <p className="simple-modal-description" style={{textAlign: 'center'}}>По этой почте уже действует подписка, введите другую и попробуйте снова</p>
      <Button className="checkout-container-button" variant="contained" onClick={handleClose}>
                ОК
      </Button>
    </div>
  );

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
}
