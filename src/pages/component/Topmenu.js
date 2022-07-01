import React from 'react'
import './css/Topmenu.css';
import './css/Bootstrap.min.css'

const Topmenu = () => {
  return (
    <div className='Topmenu'>
<div className="header__main">
        <div className="header__top">
            <div className="top__donate">
                <span className="top__text1 mr-15">Make a</span>
                <div className="plan__select mr-15">
                    <select name="Plan" id="plan" className="sub__select">
                        <option value="weekly">Weekly</option>
                        <option selected value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                </div>
                <span className="mr-15 top__text2">donation of</span>
                <input type="text" name="Amount" placeholder="$ Amount" className="header__amount mr-15" />
                <span className="mr-15 top__text3">To</span>
                <div className="plan__select mlr-5">
                    <select name="donation to" id="donation to" className="sub__select">
                        <option value="zakat" selected >Zakat</option>
                        <noscript>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </noscript>
                    </select>
                </div>
                    <input type="submit" placeholder="Donate now" value="Donate now" className="script header__submit mr-10 ml-30" />
            </div>
        </div>
    </div>
    </div>

  )
};

export default Topmenu;