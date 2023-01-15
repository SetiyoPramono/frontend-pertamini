import Head from "next/head";
import "../styles/style.scss";
import '../styles/layout/style.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pertamini</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
