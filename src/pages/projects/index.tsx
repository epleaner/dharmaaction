import React from "react";

import Projects from "@components/Projects";
import ContentfulApi from "@utils/cms/contentful";

export default function ProjectsPage({ page }) {
  return <Projects {...page} />;
}

export async function getStaticProps() {
  const { page } = await ContentfulApi.getPage("Projects");

  return {
    props: {
      page,
    },
  };
}
