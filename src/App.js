
import './css/App.css';
import Homee from './pages/Homee.js';
import './css/Bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './pages/Checkout';
import Signup from './pages/Signup'

function App() {
  return (


    <Router>
      <Routes>
          <Route path='/' element={<Homee />}  />
          <Route path='/Checkout' element={<Checkout />}  />
          <Route path='/a/signup' element={<Signup />}  />
      </Routes>
      </Router>
  );
}

export default App;