/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "elision-labs",
  titleTemplate: "%s | elision-labs",
  defaultTitle: "elision-labs",
  description: "Building the infrastructure for the future web",
  canonical: "https://elisionlabs.co",
  openGraph: {
    url: "https://elisionlabs.co",
    title: "elision-labs",
    description: "Infratructure for the future web",
    images: [
      {
        url: "https://d1c6ccc987f9ho.cloudfront.net/logos/elx-txt-right-black.png",
        alt: "elision-webapp-logo",
      },
    ],
    site_name: "elision-labs",
  },
  twitter: {
    handle: "@ElisionLabs",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
