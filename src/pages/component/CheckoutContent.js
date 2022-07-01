import React from 'react';
import './css/CheckoutContent.css'
import { Link } from 'react-router-dom';

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
    <div className="vector1"><img src="https://res.cloudinary.com/benferanmi/image/upload/v1656621472/donate/Vector_fefc4n.png" alt="vector"></img></div>
    <div className="vector2"><img src="https://res.cloudinary.com/benferanmi/image/upload/v1656621472/donate/Vector-1_kvyyzs.png" alt="vector"></img></div>
    <div className="vector3"><img src="https://res.cloudinary.com/benferanmi/image/upload/v1656621472/donate/Vector-2_skxwy8.png" alt="vector"></img></div>
    <div className="vector4"><img src="https://res.cloudinary.com/benferanmi/image/upload/v1656621472/donate/Vector-3_sizctu.png" alt="vector"></img></div>
</div>
</div>



        <div className='don-topic'>
            <h1>$1500 (one time) </h1>
            <p>Thank you for making a differnce to the communities accross the World. </p>
            <span>Please Fill out the form below to donate.</span>
        </div>

        <div className='donate__checkout__position'>
            <div className='donate__checkout__left'>
            <div className='Payment__form'>
            <div className='main__title'>
                <h1>Select Payment Method</h1>
            </div>
            <div className='Payment__card'>
            <div className='card1'>
                <div className='pay__round'>
                   <div className='round'>
                   <img src="https://res.cloudinary.com/benferanmi/image/upload/v1656629493/donate/round/Ellipse_783_zzqlco.png" className='round1' alt="elipse"></img>
                    <img src="https://res.cloudinary.com/benferanmi/image/upload/v1656629487/donate/round/Ellipse_782_hebkjp.png" className='round2' alt="round"></img>
                   </div></div>
                <h5> Credit card</h5>
                </div>
                <div className='card1'>
                <div className='pay__round'>
                   <div className='round'>
                   <img src="https://res.cloudinary.com/benferanmi/image/upload/v1656629493/donate/round/Ellipse_783_zzqlco.png" className='round1' alt="elipse"></img>
                    <img src="https://res.cloudinary.com/benferanmi/image/upload/v1656629487/donate/round/Ellipse_782_hebkjp.png" className='round2' alt="round"></img>
                   </div></div>
                <h5> Google/Apple pay</h5>
                </div>
                <div className='card1 mr-0'>
                <div className='pay__round'>
                   <div className='round'>
                   <img src="https://res.cloudinary.com/benferanmi/image/upload/v1656629493/donate/round/Ellipse_783_zzqlco.png" className='round1' alt="elipse"></img>
                    <img src="https://res.cloudinary.com/benferanmi/image/upload/v1656629487/donate/round/Ellipse_782_hebkjp.png" className='round2' alt="round"></img>
                   </div></div>
                <h5> Online Banking</h5>
                </div>
            </div>
        </div>

        <div className='Payment__details'>
            <div className='main__title'>
                <h1>Credit Card Information</h1>
            </div>
            <div className='details__fill'>
            <div className='details__1'>
            <div className='details__holder__name details'>
                   <div className='details__icon'>
                   <img src="https://res.cloudinary.com/benferanmi/image/upload/v1656673190/donate/card%20image/mon_njxxhs.jpg" alt="Card holder icon"></img>
                   </div>
                <input type="text" name="Card holder name" placeholder='Card holder name'></input>
                </div>
            </div>
                <div className='details__2'>
                <div className='holder__number details'>
                   <div className='details__icon'>
                   <img src="https://res.cloudinary.com/benferanmi/image/upload/v1656673190/donate/card%20image/mont_f8vtyz.jpg" alt="Carn number icon"></img>
                   </div>
                <input type="tel" inputMode='numeric' pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" name="CARD NUMBER" placeholder='Card number'></input>
                </div>
                
                <div className='holder__date details'>
                   <div className='details__icon'>
                   <img src="https://res.cloudinary.com/benferanmi/image/upload/v1656673190/donate/card%20image/month_t8kyrw.jpg" alt="Date icon"></img>
                   </div>
                <input type="month" min='2017-03' name="MM/YY" placeholder='MM/YY'></input>
                </div>

                <div className='holder__ccv details mr-0'>
                   <div className='details__icon'>
                   <img src="https://res.cloudinary.com/benferanmi/image/upload/v1656673190/donate/card%20image/mo_qafcnn.jpg" alt="Secret Key icon"></img>
                   </div>
                <input type="tel" name="CCV" placeholder='CCV' maxLength='3'></input>
                </div>
                </div>
            </div>
        </div>

        <div className='donate__form'>
            
        </div>

        <div className='extras'>
            <div className='extras-top'>         
            <div className='checkbox'><input type="checkbox" name="Cover processing fees"></input></div>
            <p className='extras__title'>I want to cover processing fees</p>
            </div>
                <span className='extras__span'>Covering the fees will add $33.30 (2.2% + $0.30) to the donation total. Thank you for helping to keep Penny Appeal Canada running!</span>
        </div>
        <hr></hr>
        <div className='extras'>
            <div className='extras-top'>         
            <div className='checkbox'><input type="checkbox" name="Cover processing fees"></input></div>
            <p className='extras__title'>Give an extra $10</p>
            <div className='extras__image'>
                <img src="https://res.cloudinary.com/benferanmi/image/upload/v1656690975/donate/extraic_db07k4.jpg" alt="extra imgage"></img>
            </div>
            </div>
                <span className='extras__span'>Support those in needs by giving an extra $10</span>
        </div>
            <hr></hr>

                <div className='subtotal'>
                    <span>Subtotal</span>
                    <p>$1500</p>
                </div>
                <div className='total'>
                    <span>Total</span>
                    <p>$1500</p>
                </div>
                
                <div className='main_submit'>
                    <button type="submit" className='submit__button'><Link className='link__button' to='/Success'> Donate Now
            </Link></button>
                </div>
            </div>

            <div className='Donate__checkout__right'>
                
            </div>
            
        </div>
        <div className='footer'>
                    
                </div>
        
    </div>
  )
}

export default CheckoutContent