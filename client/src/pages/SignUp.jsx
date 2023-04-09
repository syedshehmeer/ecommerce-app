import React from "react";
import "../CSS/SignUp.css";
import SignIn from "./SignInSignUp";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

function SimpleDialogSignIn(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <SignIn />
    </Dialog>
  );
}
SimpleDialogSignIn.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

const SignUp = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <div className="signup">
      <div className="signup__title">
        <p>Welcome back!</p>
        <h2>Sign in to your account</h2>
        <p>Don't have an account?</p>
        <p className="hoverMenu" onClick={handleClickOpen}>
          Sign In
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
      <SimpleDialogSignIn
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};

export default SignUp;
