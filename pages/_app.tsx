import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { FC } from "react";
import React from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export default App;
