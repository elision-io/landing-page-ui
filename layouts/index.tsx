import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const APP_NAME = "elision-labs";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <Head>
        <title>Elision Labs</title>
        <meta name="description" content="Options trading platform" />
        <meta name="application-name" content={APP_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/logo-white.png" />
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  );
}
