import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Cards from "../components/Cards";
import axios from "axios";
import { useAppContext } from "../components/Context/state";
import { useState, useEffect } from "react";

export default function Home() {
  const context = useAppContext();
  return (
    <div className={styles.container}>
      <Head>
        <title>Amock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      <Cards data={context.data} />
    </div>
  );
}
