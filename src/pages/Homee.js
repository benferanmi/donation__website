import './css/Homee.css';
import Home from './Home.js';
import Image from './component/Image.js';
import Homebar from './component/Homebar';
import Spacebetween from './component/Spacebetween.js';
import Footer from './Footer'

function Homee() {
  return (
    <div className="component-home">
      < Homebar />
      <div className='Homee'>
      < Home />
      < Spacebetween />
      < Image />
      </div>
      < Footer/>
    </div>
  );
}

export default Homee;
