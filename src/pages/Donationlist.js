import React from 'react';
import './css/donationlist.css';
import Donationmenu from './component/Donationmenu';
import './css/dashboard.css';
import {Link} from 'react-router-dom';
import {FaSearch, } from 'react-icons/fa';
import {IoMdNotifications, } from 'react-icons/io';
import {CgProfile} from 'react-icons/cg'; 
import {IoIosArrowDown, IoIosArrowForward} from 'react-icons/io';
import {HiOutlineArrowNarrowUp} from 'react-icons/hi';


function Donationlist() {
  return (
    <div className='Donatelist'>
         <div className='dashboard-menu'>
            < Donationmenu />
        </div>

        <div className='dashboard'>
            <div className='dashboard-head'>
                <div className='dashboard-head-left'>
                  <p>Dashboard</p>
                </div>

                <div className='dashboard-head-right'>
                  <span className='dash-fafa'><FaSearch id='search' className='dash-fasearch' /></span>
                  <span className='dash-fafa'><IoMdNotifications className='dash-fa'/></span>
                  <div className='donation-head-right-profile'>
                    <CgProfile className='dash-faprofile'/>
                    <p>Username<span>.</span> </p>
                    <IoIosArrowDown className='dash-faarrowdown'/>
                  </div>
                </div>
            </div>
            <hr className='dash-underline'/>

            <div className='donate-search'>
                <FaSearch className='mr-10' /> <input type="search" name="search" placeholder='Search by recipents' id='search' />
            </div>

            <div className='dashboard-lists'>
            <div className='donation-list-head'>
                  <p className='brama'>Donation Lists</p>
                  <p className='dash-view'> <Link to='/donationlist' className='mambra'> View all</Link> <IoIosArrowForward className='ml-10'/></p>
                </div>

                <div className='dash-lists'>
                  <div className='dash-lists-topic'>
                    <p className='flex-22 hide'>Program</p>
                    <p className='flex-22'>Email</p>
                    <p className='flex-11'>Amount</p>
                    <p className='flex-11 hide'>Date</p>
                    <p className='flex-11 last-list hide'>Actions</p>
                  </div>
                  <div className='dash-lists-1'>
                    <div className='dash-lists-inner'>
                    <p className='flex-22 addaha hide' id='program' ><img className='dash-icon mr-10' src="https://res.cloudinary.com/benferanmi/image/upload/v1657307819/donate/orphan_xxneop.jpg" 
                    alt={'Get img. na sample i add '} /> Orphan Sponsorship</p>
                    <p className='flex-22' id='email'> ccds99870micheal@gmail.com</p>
                    <p className='flex-11' id='amount'>$999.00</p>
                    <p className='flex-11 hide' id='date'> 20 Jan 2022</p>
                    <p className='flex-11 hide last-list'>Actions < IoIosArrowDown className='ml-10'/> </p>
                    </div>
                    <hr className='dash-list-hr' />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Donationlist