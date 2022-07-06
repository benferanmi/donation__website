import './css/Footer.css'
import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer >
         <div className='prifoot'>
         <Link to='/privacy' className='privacy' >
              Privacy Policy
            </Link>
            <p>Copyright 2022</p>
         </div>
    </footer>
  )
}

export default Footer