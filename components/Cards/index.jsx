import React, { useEffect, useState } from "react";
import styles from "../Cards/styles.module.scss";
import { BiEuro } from "react-icons/bi";
import axios from "axios";

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("https://fakestoreapi.com/products");
      console.log(request.data);
      setData(request.data);
      return request;
    }
    fetchData();
  }, ["https://fakestoreapi.com/products"]);

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
          <p className={styles.price}>
            <BiEuro />
            {e.price}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
