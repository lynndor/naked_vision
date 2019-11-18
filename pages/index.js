import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <h1>Welcome to Naked Vision TV</h1>
    <p>Wait and see what we have in store</p>
  </div>
);

export default Home;
