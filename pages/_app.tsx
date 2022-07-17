import Head from "next/head";
import { AppProps } from "next/app";
import Header from "../components/header/Header";
import "../styles/globals.css";
import { RecoilRoot, useRecoilValue } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <RecoilRoot>
      <Head>
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <title>WhatIsYourName?</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
