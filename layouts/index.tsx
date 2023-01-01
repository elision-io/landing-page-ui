import Footer from "components/Footer";
import Header from "components/Header";
import Head from "next/head";

interface BasicLayoutProps {
  children: any;
}
export default function BasicLayout({ children }: BasicLayoutProps) {
  return (
    <>
      <Header />
      <Head>
        <title>Elision Labs</title>
        <meta name="description" content="Building the Future Web" />
        <link rel="icon" href="png/logo-white.png" />
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  );
}
