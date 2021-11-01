import React from "react";

import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { useRouter } from "next/router";

import Layout from "@components/Shared/Layout";
import LandingLayout from "@components/Shared/Layout/LandingLayout";
import SEO from "@seo/next-seo.config";

import "@styles/tailwind.scss";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { pathname } = useRouter();

  console.log(pathname);
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider
        attribute="class"
        storageKey="nightwind-mode"
        defaultTheme="system" // default "light"
      >
        {pathname === "/" ? (
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
