import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import Header from "./Header";
import "../css/Signup.css";
import Spinner from "./component/Spinner";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
  });

  const { email, username, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

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
    if (password !== password2) {
      toast.error("Password do not match");
    } else {
      const userData = {
        email,
        username,
        password,
      };
      dispatch(register(userData));
    }
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
          <p>Google</p>
          <p>Apple</p>
        </div>
        <div className="or">
          <p>Or with Email</p>
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
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={onChange}
            />
            <input
              type="submit"
              className="form-control sy"
              placeholder="Sign Up"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
