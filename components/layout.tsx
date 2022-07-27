import Navbar from './navbar'
import Footer from './footer'
import Head from "next/head";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <Head>
        <title>Elision</title>
        <meta name="description" content="Derivatives trading platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  )
}