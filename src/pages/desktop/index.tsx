import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Balade au Costa Rica" />
      </Head>

      <main>You are on desktop</main>

      <footer>copyright</footer>
      <style jsx>
        {`
          main {
            color: purple;
          }
        `}
      </style>
    </>
  );
};

export default Home;
