import React from 'react'
import './css/Homebar.css'

function Homebar() {
  return (
    <div className='homebar'>
      <div class="patterns">
  <svg width="500px" height="100%">
    <defs>
      <pattern id="polka-dots" x="0" y="0"                    width="100" height="100"
               patternUnits="userSpaceOnUse">
        <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
      </pattern>  
    </defs>
              
    <rect x="0" y="0" width="100%" height="100%"> </rect>
        <text x="50%" y="60%"  text-anchor="middle"  >
        Welcome Benjamin
        </text>
        </svg>
        </div>
        <button type="Submit" className='homebar__button'>Log out</button>
    </div>
  )
}

export default Homebar