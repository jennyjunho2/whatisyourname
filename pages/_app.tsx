import Head from "next/head";
import { AppProps } from "next/app";
import Header from "../components/header/Header";
import { RecoilRoot } from "recoil";
import GlobalStyle from "../styles/reset";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <RecoilRoot>
      <Head>
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <title>WhatIsYourName?</title>
      </Head>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
