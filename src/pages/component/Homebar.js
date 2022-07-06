import React from "react";
import "./css/Homebar.css";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Homebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div>
      {user ? (
        <div className="homebar">
          <div class="patterns">
            <svg width="500px" height="100%">
              <defs>
                <pattern
                  id="polka-dots"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  patternUnits="userSpaceOnUse"
                >
                  <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
                </pattern>
              </defs>

              <rect x="0" y="0" width="100%" height="100%">
                {" "}
              </rect>
              {user ? (
                <text x="50%" y="60%" text-anchor="middle">
                  Welcome {user.username}
                </text>
              ) : (
                <></>
              )}
            </svg>
          </div>
          <button type="Submit" className="homebar__button" onClick={onLogout}>
            Log out
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Homebar;
