import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Image layout="fill" src="/logo.svg" alt="logo" />
      </header>
    </div>
  );
};

export default IndexPage;
