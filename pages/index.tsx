import Head from "next/head";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Vice Media Group Portforlio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="container mx-auto mt-3">
      <h1 className="text-3xl text-cyan-800">Vice Media Group Portforlio</h1>

      <div className="border rounded p-4 mt-4">App goes here</div>
    </main>
  </>
);

export default Home;
