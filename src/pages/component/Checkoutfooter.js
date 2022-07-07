import React from 'react';
import './css/checkoutfooter.css';
import { Link } from 'react-router-dom';
import {FaTwitter, FaFacebook, FaYoutube, FaInstagram, FaPhone, FaPlus, FaLocationArrow, FaSyncAlt, FaInbox, FaRegistered } from 'react-icons/fa'

function Checkoutfooter() {
  return (
    <div className='checkoutfooter'>
        <div className='checkoutfooter__top'>
            <div className='checkoutfooter__logo'>
                <img src="https://res.cloudinary.com/benferanmi/image/upload/v1656538101/Logo_mtkbiv.png" alt="website logo"/>
            </div>
            <div className='checkoutfooter__social'>
                <div className='f-social-facebook'>
                    < FaFacebook className='facebook'/>
                </div>
                <div className='f-social-instagram'>
                < FaInstagram  className='instagram'/>
                </div>
                <div className='f-social-youtube'>
                < FaYoutube className='youtube'/>
                </div>
                <div className='f-social-twitter'>
                < FaTwitter className='twitter'/>
                </div>
            </div>
        </div>
        <hr className='hr_underline'/>
        <div className='checkoutfooter__bottom'>
            <div className='check__list__1'>
                <div className='check__list__title'>
                    <p>About Us</p>
                </div>
                <div className='check__list__options'>
                    <p> <Link to='/development' className='link1'> Policy priorities</Link></p>
                    <p><Link to='/development' className='link1'> Carrers</Link></p>
                    <p><Link to='/development' className='link1'> Intership</Link></p>
                    <p><Link to='/development' className='link1'>Financial Reports</Link></p>
                    <p><Link to='/development' className='link1'>Contact Us</Link></p>
                </div>
            </div>
            <div className='check__list__2'>
            <div className='check__list__title'>
                    <p>Support Us</p>
                </div>
                <div className='check__list__options'>
                    <p> <Link to='./' className='link1'> Donate Now</Link></p>
                    <p><Link to='/development' className='link1'> Store</Link></p>
                    <p><Link to='/development' className='link1'> Report</Link></p>
                    <p><Link to='/development' className='link1'>Press Release</Link></p>
                    <p><Link to='/development' className='link1'>Privacy and Policy</Link></p>
                </div>
            </div>
            <div className='check__list__3'>
            <div className='check__list__title'>
                    <p> Quick links</p>
                </div>
                <div className='check__list__options'>
                    <p> <Link to='/development' className='link1'> Home</Link></p>
                    <p><Link to='/development' className='link1'> About </Link></p>
                    <p><Link to='/development' className='link1'> Our programs</Link></p>
                    <p><Link to='/development' className='link1'>Blog</Link></p>
                    <p><Link to='/development' className='link1'>Contact</Link></p>
                </div>
            </div>
            <div className='check__list__4'>
            <div className='check__list__title'>
                    <p>Contact</p>
                </div>

                <div className='check__list__options'>
                    <div className='four-1 link3'>
                        < FaPhone />
                        <p className='link1'> +1 (514) 619-0748, +1 (780) 340-1893</p>
                    </div>
                    <div className='four-1'>
                    < FaLocationArrow />
                    <p className='link1 link2'>2076 Rue de Tripoli, Laval, Qc, H7M 4M1, Canada</p>
                    </div>
                    <div className='four-1'>
                    < FaInbox />
                    <p className='link1 link2'>info@handsforcharity.org</p>
                    </div>
                    <div className='four-1'>
                    < FaRegistered /> 
                    <p className='link1 link2'>Registered Charity NO. 719253122RR0001</p>
                    </div>
                </div>
            </div>
        </div>


        <div className='second__footer'>
            <div className='second__footer__left'>
            <p>@ 2022 Hands for Charity. All right Reserved.</p>
            <p>Terms of service . Privacy policy</p>
            </div>
            <div className='second__footer__middle'>
                
            </div>
            <div className='second__footer__right'>
                <div className='dhikr1'>
                    <div className='inner__dhirk'>
                        <p> Global dhikr</p>
                        <span>84567</span>
                    </div>

                    <div className='inner__dhirk'>
                        <p>Your dhirk</p>
                        <span>145</span>
                    </div>
                </div>
                <hr/>
                <div className='dhikr2'>
                    < FaSyncAlt className='dhirk-img'/>
                    <div className='pprlin'>
                        
                    </div>
                    < FaPlus className='dhirk-img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkoutfooter