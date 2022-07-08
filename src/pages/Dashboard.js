import React from 'react';
import './css/dashboard.css';
import Donationmenu from './component/Donationmenu';
import {Link} from 'react-router-dom';
import {FaSearch, } from 'react-icons/fa';
import {IoMdNotifications, } from 'react-icons/io';
import {CgProfile} from 'react-icons/cg'; 
import {IoIosArrowDown, IoIosArrowForward} from 'react-icons/io';
import {HiOutlineArrowNarrowUp} from 'react-icons/hi';




function Dashboard() {
  return (
    <div className='dashboard-profile'>

        <div className='dashboard-menu'>
            < Donationmenu />
        </div>

        <div className='dashboard'>
            <div className='dashboard-head'>
                <div className='dashboard-head-left'>
                  <p>Dashboard</p>
                </div>

                <div className='dashboard-head-right'>
                  <span className='dash-fafa'><FaSearch className='dash-fasearch' /></span>
                  <span className='dash-fafa'><IoMdNotifications className='dash-fa'/></span>
                  <div className='donation-head-right-profile'>
                    <CgProfile className='dash-faprofile'/>
                    <p>Username<span>.</span> </p>
                    <IoIosArrowDown className='dash-faarrowdown'/>
                  </div>
                </div>
            </div>
            <hr className='dash-underline'/>
            <div className='dashboard-totals'>


                <div className='dash-total profit' id='total donation' >
                  <p className='dash-total-title'>Total Donations</p>
                  <h2> $<span>22.2</span>K</h2>
                  <p className='dash-total-text'>( $<span>15.8</span>k last year )</p>

                  <span className='total-percent textprofit'> 
                    <HiOutlineArrowNarrowUp className=''/>
                    <p className=''>105.5 <em>%</em></p>
                  </span>
                </div>


                <div className='dash-total loss' id='completed donations'>
                  <p className='dash-total-title'>Completed Donations</p>
                  <h2>114</h2>
                  <p className='dash-total-text'>(85 last year )</p>

                  <span className='total-percent textprofit'> 
                    <HiOutlineArrowNarrowUp className=''/>
                    <p className=''>47.64<em>%</em></p>
                  </span>
                </div>


                <div className='dash-total loss' id='pending donation'>
                  <p className='dash-total-title'>Pending Donations</p>
                  <h2>24</h2>
                  <p className='dash-total-text'>( 47 last year )</p>

                  <span className='total-percent textloss'> 
                    <HiOutlineArrowNarrowUp className=''/>
                    <p className=''>-47.21 <em>%</em></p>
                  </span>
                </div>


                <div className='dash-total rate' id='avarage rate'>
                  <p className='dash-total-title'>Average rate</p>
                  <h2>75 <em>%</em></h2>
                  <p className='dash-total-text'>(62<em>%</em> last year )</p>

                  <span className='total-percent textrate'> 
                    <HiOutlineArrowNarrowUp className=''/>
                    <p className=''>24.24 <em>%</em></p>
                  </span>
                </div>
              
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
                    <p className='flex-22 hide' id='program' ><img className='dash-icon mr-10' src="https://res.cloudinary.com/benferanmi/image/upload/v1657307819/donate/orphan_xxneop.jpg" 
                    alt={'Get img. na sample i add '} /> Orphan Sponsorship</p>
                    <p className='flex-22' id='email'> ccds99870micheal@gmail.com</p>
                    <p className='flex-11' id='amount'>$999.00</p>
                    <p className='flex-11 hide' id='date'> 20 Jan 2022</p>
                    <p className='flex-11 hide last-list'>Actions < IoIosArrowForward className='ml-10'/> </p>
                    </div>
                    <hr className='dash-list-hr' />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard