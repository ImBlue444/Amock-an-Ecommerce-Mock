import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Cards from "../components/Cards";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
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
    <div className={styles.container}>
      <Head>
        <title>Amock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      <Cards data={data} />
    </div>
  );
}
