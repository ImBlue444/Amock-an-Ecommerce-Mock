import "../styles/globals.css";
import Head from "next/head";
import { AppWrapper } from "../components/Context/state";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Signika:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AppWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
    </div>
  );
}

export default MyApp;
