import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import Header from "./Header";
import "./css/Login.css";
import Spinner from "./component/Spinner";
import Footer from "./Footer";

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
  }, [user, isError, isSuccess, message, dispatch, navigate,]);

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
          <h1>Sign In</h1>
          <p style={{ color: "gray" }}>Sign in to use Hands for Charity</p>
        </div>
        <div className="social1">
          <p className="google"><img src="https://res.cloudinary.com/benferanmi/image/upload/v1657026787/donate/google_fj7mdw.jpg" alt="Google icon"></img> Sign in with Google</p>
          <p className="apple"><img src="https://res.cloudinary.com/benferanmi/image/upload/v1657026797/donate/apple_vyjolm.png" alt="Apple icon"></img> Sign in with Apple</p>
        </div>
        <div className="or1">
          <hr className="social__hr"></hr>
          <p style={{ color: "gray" }}>Or with email</p>
          <hr className="social__hr"></hr>
        </div>
        <form onSubmit={submit}>
          <div className="form-group1" onSubmit={submit}>
            <input
              type="text"
              className="form-control1"
              placeholder="Username or email"
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

              <div className="remember">
                <input type="checkbox" name="remember me" className="remember__select"/>
                <p>Remember me</p>
                <Link to='/forgetpassword' className='forget-pass'> Forget password?</Link>
              </div>

            <input
              type="submit"
              value='Sign in'
              className="form-control1 sy1"
              placeholder="Sign in"
            />

            <div className="alreadyhave1">
              <p>Don't have an account? </p>
              <Link to='/signup'> <strong>Sign up</strong></Link>
            </div>
          </div>
        </form>
      </div>
      < Footer />
    </div>
  );
}

export default Login;
