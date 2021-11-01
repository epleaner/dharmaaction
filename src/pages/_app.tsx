import React from "react";

import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";

import Layout from "@components/Shared/Layout";
import LandingLayout from "@components/Shared/Layout/LandingLayout";
import SEO from "@seo/next-seo.config";

import "@styles/tailwind.scss";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  console.log(Component.name);
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider
        attribute="class"
        storageKey="nightwind-mode"
        defaultTheme="system" // default "light"
      >
        {Component.name === "Home" ? (
          <LandingLayout>
            <Component {...pageProps} />
          </LandingLayout>
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ThemeProvider>
    </>
  );
};

export default MyApp;
