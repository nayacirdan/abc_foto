import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './ConfirmOrderModal.scss';
import {useDispatch, useSelector} from 'react-redux';
import {clearCart} from '../../store/actions/cart';
import {toggleOrderModal} from '../../store/actions/actions';
import {useHistory} from 'react-router';

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

export default function SimpleModal ({onClick}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.modals.modalOrderIsOpen);
  const history = useHistory();

  const handleOpen = () => {

    /*    setOpen(true); */
  };

  const handleClose = () => {
    dispatch(clearCart());
    dispatch(toggleOrderModal(false));
    history.push('/');
    /*    setOpen(false); */
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <img className="simple-modal-img" src='images/slider/happy.png' alt="happy"/>
      <h2 className="simple-modal-title">Спасибо, что выбрали нас!</h2>
      <p className="simple-modal-description"> {`Ваш заказ №${3214} успешно оформлен.`}</p>
      <p className="simple-modal-description">Мы свяжемся с Вами в ближайшее время.</p>
      <Button className="checkout-container-button" variant="contained" onClick={handleClose}>
          Продолжить покупки
      </Button>
    </div>
  );

  return (
    <div>
      <Button
        className="checkout-container-button"
        variant="contained"
        color='primary'
        onClick={onClick}
        type='submit'>Подтвердить</Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
