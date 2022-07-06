import React from "react";
import "./css/Home.css";
import "./css/Custom.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div className="home">
      {user ? (
        <>
          {" "}
          <h1>Welcome {user.username}</h1>
          <button onClick={onLogout}>Log Out</button>
        </>
      ) : (
        <></>
      )}

      <div className="sections">
        <div className="section__logo">
          <img
            src="https://res.cloudinary.com/benferanmi/image/upload/v1656538101/Logo_mtkbiv.png"
            alt="website logo"
          ></img>
        </div>
        <div className="section1">
          <div className="section1__title">
            <h2>Donate to a Cause You Care About</h2>
          </div>
            
          <div className="section1__list mb-20">
            <div className="section1__list1">
            <input type="radio" name="donationfor" className="section1__radio" 
            id="orphan-sponsorship" />
            <label className="section1__label" for="orphan-sponsorship">
            <img src="https://res.cloudinary.com/benferanmi/image/upload/v1656538101/lovehands_h9qrlr.png"
                className="width-45" alt="love hands"/> 
                <p className="cause-title">
                Orphan <br></br>Sponsorship
              </p> </label>
              
            </div>
            <div className="section1__list1 mr-0">
            <input type="radio" name="donationfor" className="section1__radio" 
            id="Refuges-reliefs" />
            <label className="section1__label" for="Refuges-reliefs">
            <img src="https://res.cloudinary.com/benferanmi/image/upload/v1657050137/donate/walking_xqsujm.jpg"
                className="width-45" alt="love hands"/> 
                <p className="cause-title pt-10">
                Refuges <br></br> Reliefs
              </p> </label>
            </div>
          </div>
          <div className="section1__list">
         
          <div className="section1__list1">
            <input type="radio" name="donationfor" className="section1__radio" 
            id="Water wells" />
            <label className="section1__label" for="Water wells">
            <img src="https://res.cloudinary.com/benferanmi/image/upload/v1657050147/donate/water_awomkc.jpg"
                className="width-45" alt="love hands"/> 
                <p className="cause-title pt-10">
                Water <br></br> Wells
              </p> </label>
            </div>

            <div className="section1__list1 mr-0">
            <input type="radio" name="donationfor" className="section1__radio" 
            id="Zakat" />
            <label className="section1__label" for="Zakat">
            <img src="https://res.cloudinary.com/benferanmi/image/upload/v1657050142/donate/lovehand_e8bp1g.jpg"
                className="width-45" alt="love hands"/> 
                <p className="cause-title pt-10">
                Zakat
              </p> </label>
            </div>


          </div>
          <div className="section1__subtext">
            <p>
              “…and those in whose wealth there is a recognised right, for the
              needy and deprived” (Al-Ma’arij 70:24-25)
            </p>
          </div>
        </div>
        <div className="section2">
          <div className="section2__title mt-30 ">
            <h2>Giving Options</h2>
          </div>

          <div className="section2__fill">
            <div className="section2__list mr-20">
              <input type="radio" name="givingoptions" id="one time giving"/>
              <label for="one time giving"><p className="cause-title">One time giving</p></label>
            </div>
            <div className="section2__list mr-0">
              <input type="radio" name="givingoptions" id="Monthly Giving"/>
              <label for="Monthly Giving"><p className="cause-title">Monthly Giving</p></label>
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="section3__title mt-20 ">
            <h2>I would like to give:</h2>
          </div>

          <div className="section3__fill">
            <div className="section3__list">
              <input type="radio" name="amount" id="100"/>
              <label for="100"><p className="cause-title">$100</p></label>
            </div>
            <div className="section3__list">
              <input className="radio" type="radio" name="amount" id="50"/>
              <label for="50"><p className="cause-title">$50</p></label>
            </div>
            <div className="section3__list">
              <input type="radio" name="amount" id="25"/>
              <label for="25"><p className="cause-title">$25</p></label>
            </div>
            <div className="section3__list mr-0 typeoftext">
              <input type="text" name="amount" placeholder="custom" id="custom" />
            </div>
          </div>

          <div id="nonSelected"></div>
        </div>
        <div className="home__select">
          <input type="checkbox" name="honorselect" />
          <p>This gift is in Honor or in Memory</p>
        </div>
        <button className="donate__button">
          {user ? (
            <Link to="/checkout" className="link__button">
              Donate Now
            </Link>
          ) : (
            <Link to="/login" className="link__button">
              Donate Now
            </Link>
          )}
        </button>
      </div>
    </div>
  );
}

export default Home;
