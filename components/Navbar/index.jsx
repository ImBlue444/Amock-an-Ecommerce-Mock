import styles from "../Navbar/styles.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu, GiTargetArrows } from "react-icons/gi";
import { useAppContext } from "../Context/state";
import { useState } from "react";

function Navbar() {
  const context = useAppContext();
  const [inputValue, setInputValue] = useState("");

  const eventHandler = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
        <form onSubmit={handleSubmit}>
          <input
            className={styles.Search}
            type="text"
            onChange={eventHandler}
          ></input>
          <button
            onClick={() =>
              context.setData(
                context.data.filter((val) =>
                  val.title.toLowerCase().includes(inputValue.toLowerCase())
                )
              )
            }
            className={styles.SearchButton}
          >
            <FaSearch />
          </button>
        </form>
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
