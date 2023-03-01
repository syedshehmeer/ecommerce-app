import React from "react";
import "../CSS/Navbar.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__upper">
        <div className="navbar__left">
          <img
            className="hoverMenu"
            src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
          />
          <div className="navbar__country">
            <img src="https://z.nooncdn.com/s/app/com/common/images/flags/sa.svg" />
            <p>
              {" "}
              Deliver to <b>Riyadh</b>
            </p>
            <div className="hoverMenu">
              <ArrowDropDownIcon />
            </div>
          </div>
        </div>
        <div className="navbar__center">
          <input placeholder="What are you looking for?" />
        </div>
        <div className="navbar__right">
          <div className="navbar__menu hoverMenu">العربيه</div>
          <div className="navbar__menu hoverMenu">
            <strong>Sign In</strong>
            <PersonOutlineIcon />
          </div>
          <div className="navbar__menu hoverMenu">
            <strong>Cart</strong>
            <ShoppingCartOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="navbar__lower">
        <div className="navbarLower__left">
          <div className="navbarLower__menu hoverMenu">ALL CATEGORIES</div>
          <ArrowDropDownIcon />
        </div>
        <div className="navbarLower__right">
          <div className="navbarLower__menu hoverMenu">ELECTRONICS</div>
          <div className="navbarLower__menu hoverMenu">MEN</div>

          <div className="navbarLower__menu hoverMenu">WOMEN</div>
          <div className="navbarLower__menu hoverMenu">HOME</div>
          <div className="navbarLower__menu hoverMenu">BEAUTY & FRAGNANCE</div>
          <div className="navbarLower__menu hoverMenu">BABY & TOYS</div>
          <div className="navbarLower__menu hoverMenu">SPORTS</div>
          <div className="navbarLower__menu hoverMenu">BESTSELLERS</div>
          <div className="navbarLower__menu hoverMenu">SELL ON MOON</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
