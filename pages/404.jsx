import Head from "next/head";
import Heading from "../components/Heading";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <main>
      <Head>
        <title>Error</title>
      </Head>

      <Heading text="Error" />
      <span>Error code</span>
    </main>
  );
};

export default Error;
