import React from 'react';
import Topmenu from './component/Topmenu';
import Navbar from './component/Navbar';
import CheckoutContent from './component/CheckoutContent';

function Checkout() {
  return (
    <div className='Checkout'>
        <Topmenu />
        <Navbar />
        <CheckoutContent />
    </div>
  )
}

export default Checkout