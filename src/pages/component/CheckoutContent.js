import React from 'react';
import './css/CheckoutContent.css'
import Checkoutfooter from './Checkoutfooter';
import Form from '../Form.js';

function CheckoutContent() {
  return (
    <div className='CheckoutContent'>
        

        <div className="header__banner">

<div className="banner__left">
    <div className="ban_left">
        <img src="https://res.cloudinary.com/benferanmi/image/upload/v1656538101/star_spjg0r.png" alt="vector"></img>
    </div>
</div>
<div className="banner__middle">
    <h1>Checkout</h1>
    <p>Home <span>__</span> Donation <span>__</span> Checkout</p>
</div>
<div className="banner__right">
    <div className="vector1"><img src="https://res.cloudinary.com/benferanmi/image/upload/v1657133636/donate/faceicon_mumroh.jpg" alt="vector"></img></div>
    </div>
</div>
        <div className='don-topic'>
            <h1>$1500 (one time) </h1>
            <p>Thank you for making a differnce to the communities accross the World. </p>
            <span>Please Fill out the form below to donate.</span>
        </div>
            <div className='checkoutcontent__form'>
                < Form  />
            </div>
        <div className='footer'>
                    < Checkoutfooter />
                </div>
        
    </div>
  )
}

export default CheckoutContent