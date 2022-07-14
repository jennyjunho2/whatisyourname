import Head from "next/head";
import { AppProps } from "next/app";
import Header from "../components/header/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <title>WhatIsYourName?</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
