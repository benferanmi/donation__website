import React, { useState, useEffect } from "react";
import Spinner from "../pages/component/Spinner";
import { register, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import {
  FaUserAlt,
  FaMailBulk,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBusinessTime,
  FaGlobe,
  FaCity,
  FaRegFlag,
  FaAddressCard,
} from "react-icons/fa";
import PayButton from "./component/PayButton";
import "./css/form.css";
import { useStateValue } from "./StateProvider";
const { useNavigate } = require("react-router-dom");

function Form() {
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    address1: "",
    address2: "",
    country: "",
    city: "",
    state: "",
    zip: "",
  });

  const {
    firstName,
    lastName,
    email,
    phone,
    organization,
    address1,
    address2,
    country,
    city,
    state,
    zip,
  } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const generatePassword = () => {
    // Create a random password
    const randomPassword =
      Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

    // Set the generated password as state
    setPassword(randomPassword);
  };

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  console.log(password);
  // console.log(formData);

  function onSubmit(e) {
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      phone,
      organization,
      address1,
      address2,
      country,
      city,
      state,
      zip,
      password,
    };
    dispatch(register(userData));
  }

  const [{ basket }] = useStateValue();
  console.log(basket);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="check__form">
      <div className="check__form__title">
        <h1>Your Details</h1>
      </div>

      <div className="form-position">
        <form onSubmit={onSubmit}>
          <div className="form-left">
            <div className="form__lists">
              <div className="form__lists1">
                <div className="form__list__option">
                  <FaUserAlt className="form__icon" />
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    placeholder="First name"
                    id="fname"
                    className="form__input"
                    onChange={onChange}
                    onClick={generatePassword}
                  />
                </div>
                <div className="form__list__option">
                  <FaUserAlt className="form__icon" />
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    id="lname"
                    placeholder="Last name"
                    className="form__input"
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="form__lists1">
                <div className="form__list__option">
                  <FaMailBulk className="form__icon" />
                  <input
                    type="text"
                    name="email"
                    value={email}
                    id="Email"
                    required
                    placeholder="Email"
                    className="form__input"
                    onChange={onChange}
                  />
                </div>
                <div className="form__list__option">
                  <FaPhoneAlt className="form__icon" />
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    id="phone"
                    required
                    placeholder="Phone"
                    className="form__input"
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="form__list__option">
                <FaBusinessTime className="form__icon" />
                <input
                  type="text"
                  name="organization"
                  value={organization}
                  id="organisation"
                  placeholder="Organisation"
                  className="form__input"
                  onChange={onChange}
                />
              </div>

              <div className="form__list__option">
                <FaMapMarkerAlt className="form__icon" />
                <input
                  type="text"
                  name="address1"
                  value={address1}
                  id="address one"
                  placeholder="Address line 1"
                  className="form__input"
                  onChange={onChange}
                />
              </div>

              <div className="form__list__option">
                <FaMapMarkerAlt className="form__icon" />
                <input
                  type="text"
                  name="address2"
                  value={address2}
                  id="address two"
                  placeholder="Address line 2"
                  className="form__input"
                  onChange={onChange}
                />
              </div>

              <div className="form__lists1">
                <div className="form__list__option">
                  <FaGlobe className="form__icon" />
                  <input
                    type="country"
                    name="country"
                    value={country}
                    placeholder="Country"
                    id="country"
                    className="form__input"
                    onChange={onChange}
                  />
                </div>
                <div className="form__list__option">
                  <FaCity className="form__icon" />
                  <input
                    type="text"
                    name="city"
                    value={city}
                    id="city"
                    placeholder="City"
                    className="form__input"
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="form__lists1">
                <div className="form__list__option">
                  <FaRegFlag className="form__icon" />
                  <input
                    type="text"
                    name="state"
                    value={state}
                    placeholder="Province/State"
                    id="province"
                    className="form__input"
                    onChange={onChange}
                  />
                </div>
                <div className="form__list__option">
                  <FaAddressCard className="form__icon" />
                  <input
                    type="postal"
                    name="zip"
                    value={zip}
                    id="postal code"
                    placeholder="Postal Code/Zip"
                    className="form__input"
                    onChange={onChange}
                  />
                </div>
                <div className="form__list__option" style={{ display: "none" }}>
                  <FaAddressCard className="form__icon" />
                  <input
                    type="postal"
                    name="password"
                    value={password}
                    id="password"
                    placeholder="Password"
                    className="form__input"
                  />
                </div>
              </div>
              <div className="form__button">
                {/* <input
                type="submit"
                name="submit"
                value="Proceed to payment"
                id="submit"
                className="form__submit"
                onClick={generatePassword}
              /> */}
                <PayButton onClick={generatePassword} email={email} />
              </div>
            </div>
          </div>
        </form>
        <div className="form-middle"></div>
        <div className="form-right">
          {basket.map((item) => (
            <div>
              <h4>Program:</h4>
              <p>{item.name.donationfor}</p>
              <h4>Frequency:</h4>
              <p>{item.name.givingoptions}</p>
              <h4>Donation Breakdown</h4>
              <p>
                Where Most Needed <b>(${item.amount})</b>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Form;
