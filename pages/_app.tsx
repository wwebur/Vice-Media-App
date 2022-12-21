import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { FC } from "react";
import React from "react";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "vice-2ef34.firebaseapp.com",
  projectId: "vice-2ef34",
  storageBucket: "vice-2ef34.appspot.com",
  messagingSenderId: "386196953739",
  appId: "1:386196953739:web:9c8871989f49edffba128e",
};

initializeApp(firebaseConfig);

const App: FC<AppProps> = ({ Component, pageProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export default App;
