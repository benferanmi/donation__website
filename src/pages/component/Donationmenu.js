import React from 'react';
import './css/donationmenu.css';
import {Link } from 'react-router-dom';
import {FaDashcube, FaListUl, } from 'react-icons/fa';
import {FiSettings, FiHelpCircle} from 'react-icons/fi';

function Donationmenu() {
  return (
    <div className='donationmenu'>
        <div className='donationmenu1'>
        <div className='donationmenu__logo'>
            <img src="https://res.cloudinary.com/benferanmi/image/upload/v1656538101/Logo_mtkbiv.png" alt="website logo"/>
        </div>

        <div className='donationmenu__button'>
            <Link to='/dashboard' className='dashboard-link' id='Dashboard'><p className='naiq'>Dashboard</p>
                <label for="Dashboard" className='donationmenu__button1'>  < FaDashcube className='mr-10' /> Dashboard</label>
            </Link>
        </div>
        <div className='donationmenu__button'>
            <Link to='/donationlist' id='donationlist' className='dashboard-link'><p className='naiq'>Donatelist</p>
            <label for="donationlist" className='donationmenu__button2'><FaListUl className='mr-10'/> Donation List</label>
            </Link>
        </div>
        </div>

        <div className='donationmenu2'>
            <p className='prada'> < FiHelpCircle className='mr-10 ' /> Get help </p>
            <p className='prada'> < FiSettings className='mr-10 ' /> Setting </p>
        </div>
    </div>
  )
}

export default Donationmenu