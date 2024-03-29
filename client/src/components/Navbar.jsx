import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Badge from "@mui/material/Badge";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useSelector } from "react-redux";
import SignInSignUp from "../pages/SignInSignUp";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <SignInSignUp />
    </Dialog>
  );
}
SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
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
    <div className="navbar">
      <div className="navbar__upper">
        <div className="navbar__left">
          <Link to="/">
            <img
              className="navbar__logo hoverMenu"
              src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
            />
          </Link>
          <div className="navbar__country">
            <img src="https://z.nooncdn.com/s/app/com/common/images/flags/sa.svg" />
            <p>
              Deliver to <b>Riyadh</b>
            </p>
            <div className="hoverMenu">
              <ArrowDropDownIcon />
            </div>
          </div>
        </div>
        {/* <div className="navbar__center"></div> */}
        <div className="navbar__right">
          <input placeholder="What are you looking for?" />
          <div className="navbar__rightMenu">
            <strong>العربيه</strong>

            <div
              className="hoverMenu"
              style={{ display: "flex" }}
              onClick={handleClickOpen}
            >
              <strong>Sign In</strong>
              <PersonOutlineIcon />
            </div>

            <Link to="/cart">
              <strong>Cart</strong>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar__lower">
        <div className="navbarLower__left">
          <div className="navbarLower__menu hoverMenu">
            <strong>ALL CATEGORIES</strong>
          </div>
          <ArrowDropDownIcon />
        </div>
        <div className="navbarLower__right">
          <div className="navbarLower__menu hoverMenu">
            <strong>ELECTRONICS</strong>
          </div>
          <div className="navbarLower__menu hoverMenu">
            <strong>MEN</strong>
          </div>

          <div className="navbarLower__menu hoverMenu">
            <strong>WOMEN</strong>
          </div>
          <div className="navbarLower__menu hoverMenu">
            <strong>HOME</strong>
          </div>
          <div className="navbarLower__menu hoverMenu">
            <strong>BEAUTY & FRAGNANCE</strong>
          </div>
          <div className="navbarLower__menu hoverMenu">
            <strong>BABY & TOYS</strong>
          </div>
          <div className="navbarLower__menu hoverMenu">
            <strong>SPORTS</strong>
          </div>
          <div className="navbarLower__menu hoverMenu">
            <strong>BESTSELLERS</strong>
          </div>
          <div className="navbarLower__menu hoverMenu">
            <strong>SELL ON MOON</strong>
          </div>
        </div>
      </div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};

export default Navbar;
