import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      <Cards />
    </div>
  );
}
