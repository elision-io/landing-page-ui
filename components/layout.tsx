import Navbar from './navbar'
import Footer from './footer'
import Head from "next/head";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <Head>
        <title>Elision</title>
        <meta name="description" content="Options trading platform" />
        <link rel="icon" href="/logo-white.png" />
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  )
}