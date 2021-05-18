import React from "react";

import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";

import Layout from "@components/Layout";
import SEO from "@seo/next-seo.config";

import "@styles/tailwind.scss";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <DefaultSeo {...SEO} />
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
);

export default MyApp;
