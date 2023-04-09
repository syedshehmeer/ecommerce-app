import React, { useState } from "react";
import "../CSS/SignIn.css";
import "../CSS/SignUp.css";

import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

const SignIn = ({ onSignUp }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="signin">
      <div className="signin__title">
        <p>Welcome back!</p>
        <h2>Sign in to your account</h2>
        <p>Don't have an account?</p>
        <p className="hoverMenu" onClick={handleClickOpen}>
          Sign up
        </p>
      </div>
      <div className="signin__inputs">
        <form>
          <div className="signin__input">
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div className="signin__input">
            <label htmlFor="">Password</label>
            <input type="text" />
          </div>
        </form>
      </div>
      <p>Forget your password?</p>

      <button className="signin__button">SIGN IN</button>
      <Dialog onClose={handleClose} open={open}>
        <SignUp onClose={handleClose} onSignIn={onSignUp} />
      </Dialog>
    </div>
  );
};

SignIn.propTypes = {
  onSignUp: PropTypes.func.isRequired,
};

const SignUp = ({ onClose, onSignIn }) => {
  const handleClickOpen = () => {
    onSignIn();
    onClose();
  };

  return (
    <div className="signup">
      <div className="signup__title">
        <p>Welcome!</p>
        <h2>Create an account</h2>
        <p>Already have an account?</p>
        <p className="hoverMenu" onClick={handleClickOpen}>
          Sign in
        </p>
      </div>
      <div className="signup__inputs">
        <div className="signup__input">
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div className="signup__input">
          <label htmlFor="">Password</label>
          <input type="text" />
        </div>
        <div className="signup__input">
          <label htmlFor="">First Name</label>
          <input type="text" />
        </div>
        <div className="signup__input">
          <label htmlFor="">Last Name</label>
          <input type="text" />
        </div>
      </div>

      <button className="signup__button">CREATE AN ACCOUNT</button>
    </div>
  );
};

SignUp.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
};

const SignInSignUp = () => {
  const handleSignUp = () => {
    console.log("Sign up clicked");
  };

  return (
    <>
      <SignIn onSignUp={handleSignUp} />
    </>
  );
};

export default SignInSignUp;
