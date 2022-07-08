import './css/Homee.css';
import Home from './Home.js';
import Image from './component/Image.js';
import Spacebetween from './component/Spacebetween.js';
import Footer from './Footer'

function Homee() {
  return (
    <div className="component-home">
      <div className='Homee'>
      < Home className='Homemobile' />
      < Spacebetween className='spacemobile' />
      < Image className='imagemobile' />
      </div>
      < Footer/>
    </div>
  );
}

export default Homee;
