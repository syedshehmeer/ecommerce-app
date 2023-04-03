import React from "react";
import "../CSS/SignIn.css";
const SignIn = () => {
  return (
    <div className="signin">
      <div className="signin__title">
        <p>Welcome back!</p>
        <h2>Sign in to your account</h2>
        <p>Don't have an account?</p>
        <p>Sign up</p>
      </div>
      <div className="signin__inputs">
        <div className="signin__input">
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div className="signin__input">
          <label htmlFor="">Password</label>
          <input type="text" />
        </div>
      </div>
      <p>Forget your password?</p>

      <button className="signin__button">SIGN IN</button>
    </div>
  );
};

export default SignIn;
