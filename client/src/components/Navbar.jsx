import React from "react";
import "../CSS/Navbar.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" />
        <div className="navbar__country">
          <img src="https://z.nooncdn.com/s/app/com/common/images/flags/sa.svg" />
          <p>Deliver to Riyadh</p>
        </div>
      </div>
      <div className="navbar__center">
        <input placeholder="What are you looking for?" />
      </div>
      <div className="navbar__right">
        <div className="navbar__menu">Arabic</div>
        <div className="navbar__menu">
          <strong>Sign In</strong>
          <PersonOutlineIcon />
        </div>
        <div className="navbar__menu">
          <strong>Cart</strong>
          <ShoppingCartOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
