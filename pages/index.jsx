import Head from "next/head";
import Image from "next/image";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>

      <Heading tag="h1">Home</Heading>
    </main>
  );
};

export default Home;
