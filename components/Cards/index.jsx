import styles from "../Cards/styles.module.scss";
import { FaShoppingCart } from "react-icons/fa";

function Cards({ data }) {
  return (
    <div className={styles.Cards}>
      {data.length < 1 ? <div>App is loading...</div> : null}
      {data.map((e, i) => (
        <div key={i + i} className={styles.Card}>
          <img key={i} src={e.image} alt="Image not found" />
          <h2 key={i + e.title}>{e.title}</h2>
          <p className={styles.description} key={i + e.description}>
            {e.description.substring(0, 200) + "..."}
          </p>
          <p className={styles.price}>{e.price} €</p>
          <p className={styles.cart}>
            Add to cart <FaShoppingCart />
          </p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
