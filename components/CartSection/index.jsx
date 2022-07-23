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
          <div className="card">
            <button
              className="button is-danger is-small"
              onClick={() =>
                context.setCart([...context.cart.filter((x) => x.id != e.id)])
              }
            >
              X
            </button>
            <br />
            <img src={e.image} width={200}></img>
            <h3>
              <b>{e.title}</b>
            </h3>
            <p>{e.price} €</p>
            <p className={styles.description} key={i + e.description}>
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
      <div class={context.modalSwitch ? "modal is-active" : "modal"}>
        <div class="modal-background"></div>
        <div class="modal-content">
          <article class="message">
            <div class="message-header">
              <p>Thanks!</p>
              <button
                class="delete"
                aria-label="delete"
                onClick={() => context.setModalSwitch(!context.modalSwitch)}
              ></button>
            </div>
            <div class="message-body">
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
