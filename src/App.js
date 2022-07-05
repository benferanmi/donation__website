
import './css/App.css';
import Homee from './pages/Homee.js';
import './css/Bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './pages/Checkout';
import Signup from './pages/reg/Signup'
import Login from './pages/reg/Login';

function App() {
  return (


    <Router>
      <Routes>
          <Route path='/' element={<Homee />}  />
          <Route path='/Checkout' element={<Checkout />}  />
          <Route path='/Login' element={<Login />}  />
          <Route path='/Signup' element={<Signup />}  />
      </Routes>
      </Router>
  );
}

export default App;