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
    </div>
  );
}
