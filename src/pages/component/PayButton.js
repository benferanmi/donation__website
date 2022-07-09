import React, { useContext } from "react";
import axios from "axios";
import "./css/Homebar.css";
import { useStateValue } from "../StateProvider";

function PayButton() {
  const [{ basket }] = useStateValue();
  const url = "http://localhost:5000";
  const handleCheckout = async (e) => {
    const data = basket.map((item) => {
      return {
        name: item.name,
        amount: item.amount,
      };
    }, []);
    axios
      .post(`${url}/api/stripe/create-checkoutsession`, {
        data,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
        if (res.data.error) {
          console.log(res.data.error);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(data);
  };
  return (
    <div>
      <button className="donate__button" onClick={handleCheckout}>
        Proceed to payment
      </button>
    </div>
  );
}

export default PayButton;
