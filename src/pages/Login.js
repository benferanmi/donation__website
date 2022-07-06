import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import Header from "./Header";
import "./css/Login.css";
import Spinner from "./component/Spinner";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password } = formData;

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success("Log in successfully");
      navigate("/");
    }
  }, [user, isError, isSuccess, message, dispatch, navigate, isLoading]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Header />
      <div className="container_signup1">
        <div className="signup_header1">
          <h1>Sign Up</h1>
          <p style={{ color: "gray" }}>Sign up to use Hands for Charity</p>
        </div>
        <div className="social1">
          <p>Google</p>
          <p>Apple</p>
        </div>
        <div className="or1">
          <p>Or with Email</p>
        </div>
        <form onSubmit={submit}>
          <div className="form-group1" onSubmit={submit}>
            <input
              type="text"
              className="form-control1"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onChange}
            />
            <input
              type="password"
              className="form-control1"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
            <input
              type="submit"
              className="form-control1 sy1"
              placeholder="Sign Up"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
