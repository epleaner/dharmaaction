import React from "react";

import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";

import SEO from "@seo/next-seo.config";

import "@styles/tailwind.scss";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
  </>
);

export default MyApp;
