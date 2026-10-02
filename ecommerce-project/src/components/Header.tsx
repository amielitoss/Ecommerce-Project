import { useState, type ChangeEvent, type KeyboardEvent } from "react";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import myLogo from "../assets/images/casbLogo.png";
import mobileLogo from "../assets/images/casbLogoMobile.png";
import searchIcon from "../assets/images/icons/search-icon.png";
import cartIcon from "../assets/images/icons/cart-icon.png";
import "./Header.css";
import type { CartItem } from "../types";

type HeaderProps = {
  cart: CartItem[]
}

function Header({ cart }: HeaderProps) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const searchBar = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const searchProducts = () => {
    navigate(`/?search=${search}`);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      searchProducts();
    }
  };

  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo" src={myLogo} />
            <img className="mobile-logo" src={mobileLogo} />
          </NavLink>
        </div>

        <div className="middle-section">
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            value={search}
            onChange={searchBar}
            onKeyDown={handleKeyDown}
          />

          <button className="search-button" onClick={searchProducts}>
            <img className="search-icon" src={searchIcon} />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src={cartIcon} />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
