import React from 'react';
import './Header.css';
import Logo from '../assets/images/Logo_Avinova1.JPG';

import { FaSearch, FaUserCircle, FaShoppingCart, FaStore, FaEllipsisV } from 'react-icons/fa';

import { Link } from 'react-router-dom';
// import Login from './Login/Login';


function Header() {
  return (
    <header className="header">
      <div className="container-fluid">
        {/* Left side: Logo + Dropdown */}
        <div className="header-left">
          {/* Wrap logo in a link */}
          <a href= "https://www.linkedin.com/in/avinash-phalke-285215212/">
            <img src={Logo} alt="Logo" className="logo" />
          </a>


          <select className="category-dropdown">
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home & Kitchen</option>
            <option value="books">Books</option>
            <option value="sports">Sports</option>
          </select>
         
        </div>

        {/* Right side: Search + Navigation */}
        <div className="header-right">
          <div className="header-search">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="search-input"
            />
          </div>

          {/* Navigation items wrapped in links
           <a href="/src/Header/Login/Login.js" className="nav-item">
            <FaUserCircle />
            <span>Login</span>
          </a>  */}

          


<Link to="/login" className="nav-item">
  <FaUserCircle />
  <span>Login</span>
</Link>

            <a href="/src/Header/Login/Login.js" className="nav-item">
            <FaShoppingCart />
            <span>Cart</span>
          </a> 
          {/* <Link to="./Login/Login.js" className="nav-item">Login</Link>
          <Link to="" className="nav-item">Cart</Link> */}

          <a href="/seller" className="nav-item">
            <FaStore />
            <span>Become a Seller</span>
          </a>
          <div className="nav-item">
            <FaEllipsisV />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
