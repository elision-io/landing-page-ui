import { Flex } from "@chakra-ui/react";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html>
      <body>
        <Flex
          as="nav"
          direction="column"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
        >
          <NavBar />
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
          <main>{children}</main>
          <Footer />
        </Flex>
      </body>
    </html>
  );
}
