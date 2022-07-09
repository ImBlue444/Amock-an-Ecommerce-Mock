import React from "react";
import styles from "../Navbar/styles.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.burgerMenu}>
        <GiHamburgerMenu />
      </div>
      <img
        src="https://castasrl.it/wp-content/uploads/2016/12/envato-logo-small.svg"
        alt="Img not found"
        width="60"
      />
      <h3 className={styles.Location}>Select your location</h3>
      <div className={styles.SearchBar}>
        <input className={styles.Search} type="text"></input>
        <button className={styles.SearchButton}>
          <FaSearch />
        </button>
      </div>

      <a className={styles.LogIn}>
        <b>Log in</b>
      </a>
      <a className={styles.SignIn}>
        <b>Sign in</b>
      </a>
      <button className={styles.Cart}>
        <FaShoppingCart /> 0
      </button>
    </div>
  );
}

export default Navbar;
