import Head from "next/head";
import type { NextPage } from "next";
import React, { useCallback } from "react";
import { useRouter } from "next/router";
import Portfolio from "../components/Portfolio";
import type Show from "../types/Show";
import { getShows } from "./api/shows";

interface NextPageProps {
  shows?: Show[];
}

const Home: NextPage<NextPageProps> = ({ shows }) => {
  const router = useRouter();
  const { id } = router.query;
  const onIdChange = useCallback(
    (newId: string) => {
      router.push({ query: { id: newId } }, undefined, { shallow: true });
    },
    [router]
  );

  return (
    <>
      <Head>
        <title>Vice Media Group Portforlio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto mt-3">
        <h1 className="text-3xl text-cyan-800 text-center">
          Vice Media Group Portforlio
        </h1>

        <div className="border rounded p-4 mt-4">
          {shows && shows.length !== 0 ? (
            <Portfolio currentId={id} onChange={onIdChange} shows={shows} />
          ) : (
            <p className="my-5 text-red-900 text-center">
              Something went wrong, please try again later
            </p>
          )}
        </div>
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  const shows = await getShows();

  return {
    props: { shows },
  };
};

export default Home;
