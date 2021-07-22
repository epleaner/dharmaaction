import React from "react";

import About from "@components/About";
import ContentfulApi from "@utils/cms/contentful";

export default function AboutPage({ page }) {
  return <About {...{ page }} />;
}

export async function getStaticProps() {
  const { page } = await ContentfulApi.getPage("About");

  return {
    props: {
      page,
    },
  };
}
