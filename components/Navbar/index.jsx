import styles from "../Navbar/styles.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAppContext } from "../Context/state";

function Navbar() {
  const context = useAppContext();

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
            onChange={context.eventHandler}
            placeholder={"Search..."}
          ></input>
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
