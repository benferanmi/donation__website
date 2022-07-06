import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./css/Homebar.css";

function PayButton({ pay }) {
  const { user } = useSelector((state) => state.auth);
  const url = "http://localhost:5000";
  const handleCheckout = async (e) => {
    axios
      .post(`${url}/api/stripe/create-checkoutsession`, {
        pay,
        userId: user._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(pay);
  };
  return (
    <div>
      <button className="donate__button" onClick={handleCheckout}>
        Donate Now
      </button>
    </div>
  );
}

export default PayButton;
