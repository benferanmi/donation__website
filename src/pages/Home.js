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
              <img
                src="https://res.cloudinary.com/benferanmi/image/upload/v1656538101/lovehands_h9qrlr.png"
                className="width-45"
                alt="love hands"
              ></img>
              <p className="cause-title">
                Orphan <br></br>Sponsorship
              </p>
            </div>
            <div className="section1__list1 mr-0">
              <img
                src="https://res.cloudinary.com/benferanmi/image/upload/v1656538220/donate/walkingicon/woman_qvyh75.png"
                className="pr-0 width-12"
                alt="walking icon woman"
              ></img>
              <img
                src="https://res.cloudinary.com/benferanmi/image/upload/v1656538220/donate/walkingicon/man_csoxlg.png"
                className="width-15"
                alt="walking icon man"
              ></img>
              <p className="cause-title">
                Refugees <br></br> Relifs
              </p>
            </div>
          </div>
          <div className="section1__list">
            <div className="section1__list1">
              <div className="section1__img">
                <div className="image1">
                  <img
                    src="https://res.cloudinary.com/benferanmi/image/upload/v1656538207/donate/drop_u1q1qb.png"
                    className="width-30"
                    alt="water drop icon"
                  ></img>
                  <img
                    src="https://res.cloudinary.com/benferanmi/image/upload/v1656538207/donate/inse_elho25.png"
                    className="inse"
                    alt=""
                  ></img>
                </div>
              </div>
              <p>
                Water <br></br> Wells
              </p>
            </div>
            <div className="section1__list1 mr-0">
              <span className="sssppp"></span>
              <div className="section1__img ">
                <div className="image1">
                  <img
                    src="https://res.cloudinary.com/benferanmi/image/upload/v1656538248/donate/loveonhandicon/love_vzej2y.png"
                    className="lovehandicon"
                    alt="water drop icon"
                  ></img>
                  <img
                    src="https://res.cloudinary.com/benferanmi/image/upload/v1656538249/donate/loveonhandicon/hand_oed8de.png"
                    className="handicon"
                    alt=""
                  ></img>
                  <img
                    src="https://res.cloudinary.com/benferanmi/image/upload/v1656538248/donate/loveonhandicon/longer_hnz8y8.png"
                    alt=""
                    className="longerhand"
                  ></img>
                  <img
                    src="https://res.cloudinary.com/benferanmi/image/upload/v1656538248/donate/loveonhandicon/long_uzninq.png"
                    alt=""
                    className="longhand"
                  ></img>
                  <img
                    src="https://res.cloudinary.com/benferanmi/image/upload/v1656538248/donate/loveonhandicon/short_hgnlkv.png"
                    alt=""
                    className="shorthand"
                  ></img>
                </div>
              </div>

              <p>Zakat</p>
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
              <p>One-time giving</p>
            </div>
            <div className="section2__list">
              <p>Monthly Giving</p>
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="section3__title mt-20 ">
            <h2>I would like to give:</h2>
          </div>

          <div className="section3__fill">
            <div className="section3__list">
              <p>$100.00</p>
            </div>
            <div className="section3__list">
              <p>$5.00</p>
            </div>
            <div className="section3__list">
              <p>$25.00</p>
            </div>
            <div className="section3__list mr-0">
              <p>other</p>
            </div>
          </div>

          <div id="nonSelected"></div>
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

        <div className="footer"></div>
      </div>
    </div>
  );
}

export default Home;
