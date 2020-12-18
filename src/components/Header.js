import React from "react";
import "./Head.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from "../firebase.js";

function Header() {
  const[{basket,user},dispatch]= useStateValue();

  const handleSignInSignOut=() =>{

    if(user){
      auth.signOut();
    }

  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png"
          alt="website logo"
        ></img>
            
         
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>

      <div className="header__nav">
        <Link to={ !user && "/login"}>
         <div onClick={handleSignInSignOut} className="header__option">
          <span className="header__optionLineOne">Hello {user ? user.email:"Guest"} </span>
          <span className="header__optionLineTwo">{user ? "Sign Out" :"Sign In"}</span>
        </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne"> Returns </span>
          <span className="header__optionLineTwo"> & Orders </span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your </span>
          <span className="header__optionLineTwo"> Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon fontSize="large"></ShoppingCartIcon>
            <span className="header__optionLineTwo header__Count">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
