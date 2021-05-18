import React from "react";

import ContentfulPage from "@components/ContentfulPage";
import ContentfulApi from "@utils/cms/contentful";

export default function Home({ page }) {
  const { title, name, content } = page;

  return (
    <main className="flex justify-center min-h-screen px-4 py-12 bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100 dark:from-gray-600 dark:via-gray-600 dark:to-gray-700">
      <ContentfulPage {...{ title, name, content }} />
    </main>
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
