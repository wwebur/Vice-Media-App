import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Vice Media Group Portforlio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <h1>Vice Media Group Portforlio</h1>

      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </main>
  </>
);

export default Home;
