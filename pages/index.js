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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Carousel />
      <Cards data={context.inputValue ? context.filteredData : context.data} />
    </div>
  );
}
