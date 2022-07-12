import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import Header from "./Header";
import "./css/Signup.css";
import Spinner from "./component/Spinner";
import Footer from "./Footer";

function Signup() {
  const [password, setPassword] = useState("wet");
  const [formData, setFormData] = useState({
    email: "",
    username: "",
  });
  const { email, username } = formData;
  console.log(email);
  console.log(username);
  console.log(password);

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

  useEffect(
    () => async () => {
      if (isError) {
        toast.error(message);
      }
      if (isSuccess || user) {
        toast.success("Registration Successful");
        navigate("/");
      }

      dispatch(reset());
    },
    [user, isError, message, isSuccess, dispatch, navigate]
  );

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const submit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      username,
      password,
    };
    dispatch(register(userData));
  };
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Header />
      <div className="container_signup">
        <div className="signup_header">
          <h1>Sign Up</h1>
          <p style={{ color: "gray" }}>Sign up to use Hands for Charity</p>
        </div>
        <div className="social">
          <p className="google">
            <img
              src="https://res.cloudinary.com/benferanmi/image/upload/v1657026787/donate/google_fj7mdw.jpg"
              alt="Google icon"
            ></img>{" "}
            Sign in with Google
          </p>
          <p className="apple">
            <img
              src="https://res.cloudinary.com/benferanmi/image/upload/v1657026797/donate/apple_vyjolm.png"
              alt="Apple icon"
            ></img>{" "}
            Sign in with Apple
          </p>
        </div>
        <div className="or">
          <hr className="social__hr"></hr>
          <p>Or with Email</p>
          <hr className="social__hr"></hr>
        </div>
        <form onSubmit={submit}>
          <div className="form-group" onSubmit={submit}>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onChange}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="username"
              value={username}
              onChange={onChange}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              name="password"
              readOnly
              value={password}
            />
            <div className="remember">
              <input
                type="checkbox"
                name="remember me"
                className="remember__select"
              />
              <p>Remember me</p>
              <Link to="/forgetpassword" className="forget-pass">
                {" "}
                Forget password?
              </Link>
            </div>
            <input
              type="submit"
              className="form-control sy"
              value="Sign up"
              placeholder="Sign Up"
              onClick={generatePassword}
            />
            <div className="alreadyhave">
              <p>Already have an account? </p>
              <Link to="/login">
                {" "}
                <strong>Sign in</strong>
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
