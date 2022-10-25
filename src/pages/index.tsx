import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Alliance Francaise</title>
        <meta name="description" content="Balade au Costa Rica" />
      </Head>

      <main>You are on mobile</main>

      <footer>copyright</footer>
      <style jsx>
        {`
          main {
            color: blue;
          }
        `}
      </style>
    </>
  );
};

export default Home;
