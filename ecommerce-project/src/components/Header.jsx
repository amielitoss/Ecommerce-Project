import { NavLink } from 'react-router';
import myLogo from '../assets/images/logoCasb.png';
import mobileLogo from '../assets/images/my-mobile-logo.png';
import searchIcon from '../assets/images/icons/search-icon.png';
import carticon from  '../assets/images/icons/cart-icon.png';
import './Header.css';

function  Header() {
    return (
        <>
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo"
            src={myLogo} />
          <img className="mobile-logo"
            src={mobileLogo} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src={searchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">

          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={carticon} />
          <div className="cart-quantity">3</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
        </>
    )
}

export default Header;