import React from "react";

import Head from "next/head";

import ContentfulPage from "@components/ContentfulPage";
import ContentfulApi from "@utils/cms/contentful";

export default function Home({ page }) {
  const { title, name, content } = page;

  return (
    <div>
      <Head>
        <title>Dharma Action Network for Climate Engagement</title>

        <meta
          name="description"
          content="Use tailwind css, eslint, prettier & absolute imports instantly.
            Easily extendable zero-config template for pros and beginners."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center min-h-screen py-20 bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100">
        <div className="prose">
          <ContentfulPage {...{ title, name, content }} />
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const { page } = await ContentfulApi.getPage("Home Page");

  return {
    props: {
      page,
    },
  };
}
