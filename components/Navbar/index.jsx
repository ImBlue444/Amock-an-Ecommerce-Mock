import styles from "../Navbar/styles.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { useAppContext } from "../Context/state";
import Link from "next/link";

function Navbar() {
  const context = useAppContext();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={context.modalSwitch ? styles.hide : null}>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-brand">
              <Link href="/">
                <img
                  className={styles.homeImg}
                  src="https://castasrl.it/wp-content/uploads/2016/12/envato-logo-small.svg"
                  alt="Img not found"
                  width="60"
                />
              </Link>
              <h3 className="navbar-item">
                <b>Select your location</b>
              </h3>
              <div className="navbar-item">
                <form className="control " onSubmit={handleSubmit}>
                  <p className="control">
                    <input
                      className={styles.barInput}
                      type="text"
                      onChange={context.eventHandler}
                      placeholder={"Search..."}
                    ></input>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a className="navbar-item">
              <b>Log in</b>
            </a>
            <a className="navbar-item">
              <b>Sign in</b>
            </a>

            <Link href="/cart">
              <button className="button is-warning is-large">
                <FaShoppingCart /> {context.cart.length}
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
