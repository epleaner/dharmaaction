import React from "react";

import LandingPage from "@components/LandingPage";
import ContentfulApi from "@utils/cms/contentful";

export default function Home({ page }) {
  const { title, name, content } = page;

  return <LandingPage {...{ title, name, content }} />;
}

export async function getStaticProps() {
  const { page } = await ContentfulApi.getPage("Home Page");

  return {
    props: {
      page,
    },
  };
}
