import React from 'react';
import './css/Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
   <div className='Don-btn'>
     <Link to='Signup'>
      <button className='btn login'>Login Now</button>
    </Link>
    <Link to='Checkout'>
    <button className='btn signup'>Donate Now</button>
  </Link>
   </div>
  );
}