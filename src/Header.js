import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://th.bing.com/th/id/R.a46bdae71c76bc7adf813ce37f1772b6?rik=ViO948MWNOrvfw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-qCdLlcNBCxg%2fUdvLlluJD3I%2fAAAAAAAAF4w%2fOXWl9nVwf3g%2fs1600%2famazon-logo.png&ehk=v5p2vKJLOmOUGfhc6Q8NuIQELHhbcD%2f%2bWwlDYU%2bgvGQ%3d&risl=&pid=ImgRaw&r=0"
          alt="amazon-logo"
        />
      </Link>
      <div className="header-search">
        <input type="text" className="header-input" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <Link to={!user && '/login'} className="header-link">
          <div onClick={login} className="header-option">
            <span className="header-option-lineOne">Hello, {user?.email}</span>
            <span className="header-option-lineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-option-lineOne">Returns</span>
            <span className="header-option-lineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-option-lineOne">Your</span>
            <span className="header-option-lineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header-link">
          <div className="header-option-basket">
            <ShoppingCartIcon />
            <span className="header-option-lineTwo header-basket-count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
