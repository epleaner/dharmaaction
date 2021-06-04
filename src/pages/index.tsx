import React from "react";

import ContentfulPage from "@components/ContentfulPage";
import ContentfulApi from "@utils/cms/contentful";

export default function Home({ page }) {
  const { title, name, content } = page;

  return <ContentfulPage {...{ title, name, content }} />;
}

export async function getStaticProps() {
  const { page } = await ContentfulApi.getPage("Home Page");

  return {
    props: {
      page,
    },
  };
}
