/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "elision-labs",
  titleTemplate: "%s | elision-labs",
  defaultTitle: "elision-labs",
  description: "Web application for Elision Tools Suite",
  canonical: "https://elisionlabs.io",
  openGraph: {
    url: "https://elisionlabs.io",
    title: "elision-labs",
    description:
      "Elision Labs is a blockchain development company that specializes in building and deploying decentralized applications that disrupt the traditional status quo.",
    images: [
      {
        url: "d1c6ccc987f9ho.cloudfront.net/logos/elx-txt-btm-white.png",
        alt: "elisionlabs.io original-image",
      },
    ],
    site_name: "elision-labs",
  },
  twitter: {
    handle: "@ElisionLabs",
    cardType: "summary_large_image",
  },
};

export default defaultiSEOConfig;
