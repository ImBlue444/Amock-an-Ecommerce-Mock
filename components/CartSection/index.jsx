import { useAppContext } from "../Context/state";
import styles from "../CartSection/styles.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function CartSection() {
  const context = useAppContext();

  return (
    <div className={styles.CartSection}>
      <h2 className={styles.cartInfo}>
        {" "}
        {context.cart.length > 0 ? "Your cart:" : "Your cart is empty"}
      </h2>
      <div className={styles.cartCards}>
        {context.cart.map((e, i) => (
          <div key={id + "div"} className="card">
            <button
              key={id + "buttons"}
              className="button is-danger is-small"
              onClick={() =>
                context.setCart([...context.cart.filter((x) => x.id != e.id)])
              }
            >
              X
            </button>
            <br />
            <img key={id + "image"} src={e.image} width={200}></img>
            <h3 key={id}>
              <b>{e.title}</b>
            </h3>
            <p key={id + price}>{e.price} €</p>
            <p key={id + description} className={styles.description}>
              <i>{e.description.substring(0, 200) + "..."}</i>
            </p>
          </div>
        ))}
      </div>
      <div className={styles.buttonGroup}>
        {context.cart.length > 0 ? (
          <button
            className="button is-warning is-large"
            onClick={() => context.setModalSwitch(!context.modalSwitch)}
          >
            Buy
          </button>
        ) : null}

        <Link href="/">
          <button className="button is-warning is-large">Back to shop</button>
        </Link>
      </div>
      <div className={context.modalSwitch ? "modal is-active" : "modal"}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <article className="message">
            <div className="message-header">
              <p>Thanks!</p>
              <button
                className="delete"
                aria-label="delete"
                onClick={() => context.setModalSwitch(!context.modalSwitch)}
              ></button>
            </div>
            <div className="message-body">
              Thanks for the intrest, if you liked my demo contact me via
              Linkedin or e-mail: dennis.badagliacca444@gmail.com.
              <br />
              Follow my GitHub for further updates or other projects. Hope to
              see you soon!
              <br />
              Dennis Badagliacca
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
