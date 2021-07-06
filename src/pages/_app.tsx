import React from "react";

import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";

import Layout from "@components/Shared/Layout";
import SEO from "@seo/next-seo.config";

import "@styles/tailwind.scss";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <DefaultSeo {...SEO} />
    <ThemeProvider
      attribute="class"
      storageKey="nightwind-mode"
      defaultTheme="system" // default "light"
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
);

export default MyApp;
