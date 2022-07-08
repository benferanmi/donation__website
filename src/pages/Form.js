import React, { useContext } from "react";
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
import "./css/form.css";
import { useStateValue } from "./StateProvider";

function Form() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  const click = () => {
    console.log("clicked");
  };
  return (
    <div className="check__form">
      <div className="check__form__title">
        <h1>Your Details</h1>
      </div>

      <div className="form-position">
        <div className="form-left">
          <div className="form__lists">
            <div className="form__lists1">
              <div className="form__list__option">
                <FaUserAlt className="form__icon" />
                <input
                  type="text"
                  name="fname"
                  placeholder="First name"
                  id="fname"
                  className="form__input"
                />
              </div>
              <div className="form__list__option">
                <FaUserAlt className="form__icon" />
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  placeholder="Last name"
                  className="form__input"
                />
              </div>
            </div>
            <div className="form__lists1">
              <div className="form__list__option">
                <FaMailBulk className="form__icon" />
                <input
                  type="text"
                  name="Email"
                  id="Email"
                  required
                  placeholder="Email"
                  className="form__input"
                />
              </div>
              <div className="form__list__option">
                <FaPhoneAlt className="form__icon" />
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  required
                  placeholder="Phone"
                  className="form__input"
                />
              </div>
            </div>
            <div className="form__list__option">
              <FaBusinessTime className="form__icon" />
              <input
                type="text"
                name="organisation"
                id="organisation"
                placeholder="Organisation"
                className="form__input"
              />
            </div>

            <div className="form__list__option">
              <FaMapMarkerAlt className="form__icon" />
              <input
                type="text"
                name="address one"
                id="address one"
                placeholder="Address line 1"
                className="form__input"
              />
            </div>

            <div className="form__list__option">
              <FaMapMarkerAlt className="form__icon" />
              <input
                type="text"
                name="address two"
                id="address two"
                placeholder="Address line 2"
                className="form__input"
              />
            </div>

            <div className="form__lists1">
              <div className="form__list__option">
                <FaGlobe className="form__icon" />
                <input
                  type="country"
                  name="country"
                  placeholder="Country"
                  id="country"
                  className="form__input"
                />
              </div>
              <div className="form__list__option">
                <FaCity className="form__icon" />
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  className="form__input"
                />
              </div>
            </div>
            <div className="form__lists1">
              <div className="form__list__option">
                <FaRegFlag className="form__icon" />
                <input
                  type="text"
                  name="province"
                  placeholder="Province/State"
                  id="province"
                  className="form__input"
                />
              </div>
              <div className="form__list__option">
                <FaAddressCard className="form__icon" />
                <input
                  type="postal"
                  name="postal code"
                  id="postal code"
                  placeholder="Postal Code/Zip"
                  className="form__input"
                />
              </div>
            </div>
            <div className="form__button">
              <input
                type="submit"
                name="submit"
                value="Proceed to payment"
                id="submit"
                className="form__submit"
                onClick={click}
              />
            </div>
          </div>
        </div>
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
