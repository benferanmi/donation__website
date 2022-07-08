import React from 'react';
import Topmenu from './component/Topmenu';
import Navbar from './component/Navbar';
import CheckoutContent from './component/CheckoutContent';

function Checkout() {
  return (
    <div className='Checkout'>
        <Topmenu className='topmenu' />
        <Navbar className='navbar'  />
        <CheckoutContent className='checkout content'  />
    </div>
  )
}

export default Checkout