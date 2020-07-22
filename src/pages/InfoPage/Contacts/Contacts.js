import React from 'react';

import './Contacts.scss';

import { HashLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    color: '#000000',
    fontSize: '14px'
  }
}));

const Credit = () => {
  const classes = useStyles();
  return (
    <HashLink className={classes.link} to="/info#contacts" >
      <div className='container contacts' id='contacts'>
        <h1>Консультации и заказ по телефонам</h1>
        <div className='delivery-in'>
          <div>
            <h4>ABCphoto</h4>
            <p>0 (800) 21 21 50</p>
            <p>0 (44) 377 70 11</p>
            <p>0 (56) 370 36 53</p>
          </div>
          <div>
            <h4>Магазины и точки выдачи</h4>
            <div className='adresses'>
              <div>г. Киев, ул. Андреевская, 9а</div>
              <div>г. Киев, ул. Зверинецкая, 72</div>
              <div>г. Киев, ул. Семьи Хохловых, 8</div>
            </div>
          </div>
          <div>
            <div>
              <h4>График работы колл-центра</h4>
              <h1>с 8:00 до 21:00</h1>
              <div className='fd-row'>
                <div className='fd-column'>
                  <div>В субботу:</div>
                  <div>В воскресенье:</div>
                </div>
                <div className='fd-column'>
                  <div>с 9:00 до 20:00</div>
                  <div>с 10:00 до 19:00</div>
                </div>
              </div>
              <h4>График работы (Пн-Сб)</h4>
              <h1>с 10:00 до 21:00</h1>
              <div className='fd-row'>
                <div>
                  <div>В воскресенье:</div>
                </div>
                <div>
                  <div>с 10:00 до 18:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </HashLink>
  );
};

export default React.memo(Credit);