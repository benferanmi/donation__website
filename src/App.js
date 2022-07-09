import "./css/App.css";
import './css/mobile.css';
import Homee from "./pages/Homee.js";
import "./css/Bootstrap.min.css";
import "./css/Custom.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Donationlist from "./pages/Donationlist";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homee />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lists" element={<Donationlist />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
