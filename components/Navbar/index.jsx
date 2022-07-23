import styles from "../Navbar/styles.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { useAppContext } from "../Context/state";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const context = useAppContext();
  const [userInput, setUserInput] = useState("");

  const LogInHandler = (event) => {
    setUserInput(event.target.value);
  };
  const LogInSubmit = () => {
    context.setModalLogSwitch(!context.modalLogSwitch);
    context.setUserLogged(userInput);
  };

  return (
    <div className={context.modalSwitch ? styles.hideNav : styles.Navbar}>
      <nav className={styles.NavbarGroup}>
        <Link href="/">
          <img
            className={styles.homeImg}
            src="https://castasrl.it/wp-content/uploads/2016/12/envato-logo-small.svg"
            alt="Img not found"
            width="60"
          />
        </Link>
        <h3 className={styles.title}>
          <b>E-Commerce</b>
        </h3>

        <input
          type="text"
          className={styles.barInput}
          onChange={context.eventHandler}
          placeholder={"Search..."}
        ></input>

        <h3 className={context.userLogged ? styles.logInMsg : styles.hideMsg}>
          <b>
            <i>Hi, {context.userLogged}!</i>
          </b>
        </h3>

        <a
          className={styles.LogInOut}
          onClick={() => {
            context.userLogged
              ? context.setUserLogged(false)
              : context.setModalLogSwitch(!context.modalLogSwitch);
          }}
        >
          <b>{context.userLogged ? "LogOut" : "LogIn"}</b>
        </a>
        <a className={styles.SignUp}>
          <b>Sign up</b>
        </a>

        <Link href="/cart">
          <button className="button is-warning is-large">
            <FaShoppingCart /> {context.cart.length}
          </button>
        </Link>

        <div className={context.modalLogSwitch ? "modal is-active" : "modal"}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Log in</p>
              <button
                className="delete"
                aria-label="close"
                onClick={() =>
                  context.setModalLogSwitch(!context.modalLogSwitch)
                }
              ></button>
            </header>
            <section className="modal-card-body">
              <form className="box">
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Username..."
                      onChange={(e) => LogInHandler(e)}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      className="input"
                      type="password"
                      placeholder="********"
                    />
                  </div>
                </div>
              </form>
            </section>
            <footer className="modal-card-foot">
              <button
                className="button is-success"
                onClick={(e) => LogInSubmit()}
              >
                Save changes
              </button>
              <button
                className="button"
                onClick={() =>
                  context.setModalLogSwitch(!context.modalLogSwitch)
                }
              >
                Cancel
              </button>
            </footer>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
