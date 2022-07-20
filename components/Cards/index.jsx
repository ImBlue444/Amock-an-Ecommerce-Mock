import styles from "../Cards/styles.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import { useAppContext } from "../Context/state";

function Cards({ data }) {
  const context = useAppContext();

  return (
    <div className={styles.Cards}>
      {data.length < 1 ? <div>No results...</div> : null}
      {data.map((e, i) => (
        <div key={i + i} className={styles.Card}>
          <img
            onClick={() => console.log(e.id)}
            key={i}
            src={e.image}
            alt="Image not found"
          />
          <h2 key={i + e.title}>
            <b>{e.title}</b>
          </h2>
          <p className={styles.description} key={i + e.description}>
            {e.description.substring(0, 200) + "..."}
          </p>
          <br />
          <p className={styles.price}>{e.price} €</p>
          <button
            onClick={() => context.setCart((current) => [...current, e.id])}
            className={"button is-warning is-large"}
          >
            Add to cart <FaShoppingCart />
          </button>
          <button onClick={() => console.log(context.cart)}>log</button>
        </div>
      ))}
    </div>
  );
}

export default Cards;
