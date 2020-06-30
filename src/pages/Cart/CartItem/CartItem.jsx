import React, {useEffect, useState} from 'react';
import './CartItem.scss'
// import image from 'public/images/gallery_items/canon_1/image_1.jpg'
// import {image2} from 'public/images/gallery_items/canon_1/image_2.jpg'
// import {image3} from 'public/images/gallery_items/canon_1/image_3.jpg'

const CartItem = ({setTotalPrice, totalPrice}) => {
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(9132)

    useEffect(()=>{
        setTotalPrice((prevState)=> prevState + price)
    }, [])

    return (
        <div className='CartItem'>
            <div className='CartItem__img-descr-wrap'>
            <div className='CartItem__img'>
                <img src={process.env.PUBLIC_URL + '/images/gallery_items/canon_1/image_2.jpg'} alt=""/>
            </div>
            <div className='CartItem__descrip'>
                <span>Canon EOS 6D</span>
                <span>wi-fi body</span>
                <span>Код товара: 123423</span>
            </div>
            </div>
            <div className='CartItem__price'>
                {price} грн
            </div>
            <div className='CartItem__quantity'>
                <button onClick={()=> {
                    setQuantity(quantity + 1)
                    setTotalPrice((prevState)=> prevState + price)
                }}>+</button>
                {quantity}
                <button onClick={()=> {
                    quantity > 1 && setQuantity(quantity - 1)
                    quantity > 1 && setTotalPrice((prevState)=> prevState - price)
                }}>–</button>
            </div>
            <div className='CartItem__total'>
                {price * quantity} грн
            </div>
        </div>
    );
};

export default CartItem;