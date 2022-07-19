import Head from "next/head";
import styles from "../styles/Home.module.css";
import Carousel from "../components/Carousel";
import Cards from "../components/Cards";
import { useAppContext } from "../components/Context/state";

export default function Home() {
  const context = useAppContext();

  return (
    <div className={styles.container}>
      <Head>
        <title>Amock E-Commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      <Cards data={context.inputValue ? context.filteredData : context.data} />
    </div>
  );
}
