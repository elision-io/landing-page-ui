import Head from "next/head";
import type { HeadingProps } from "@chakra-ui/react";

const Head = () => (
  <Head>
    <title>Elision Labs</title>
    <meta property="og:title" content="Elision Labs" key="title" />
    <meta
      name="description"
      property="og:description"
      content="Building the Open Web"
    />
    <link rel="icon" href="png/logo-white.png" />
  </Head>
);
