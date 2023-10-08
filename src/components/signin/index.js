import React from "react";
import "./signin.css";
import { login } from "../../utils/authSlice";
import { useDispatch, useSelector } from "react-redux";

const SignIn = ({ setModalShow }) => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const handleSignIn = () => {
    dispatch(login());
    setModalShow(false);
  };

  return (
    <div className={name === "" ? "signin-close" : "signin"}>
      <div className="signin__title">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052"
          alt="Logo"
        />
        <h5>Sign in to YouTube</h5>
      </div>
      <div className="signin__details">
        <p>
          Sign in for personalized recommendations, saved playlists, seamless
          video history across devices and more added benefits.
        </p>
      </div>
      <div className="sigin__buttons">
        <span onClick={() => setModalShow(false)}>No thanks</span>
        <span onClick={handleSignIn}> Sign In</span>
      </div>
    </div>
  );
};

export default SignIn;
