import Head from "next/head";
import { AppProps } from "next/app";
import Header from "../components/Header/Header";
import { RecoilRoot } from "recoil";
import GlobalStyle from "../styles/reset";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <RecoilRoot>
      <Head>
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <title>WhatIsYourName?</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
