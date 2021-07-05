import React from "react";

import Project from "@components/Projects/Project";
import ContentfulApi from "@utils/cms/contentful";
import stringUtils from "@utils/string";

export default function ProjectsPage({ project, title }) {
  return <Project {...project} {...{ title }} />;
}

export async function getStaticProps({ params }) {
  const title = stringUtils.toTitle(params.title);

  const { page = null } = await ContentfulApi.getPage("Projects");

  let project = null;

  if (page)
    project = page.content
      .filter((c) => c.title.toLowerCase() === title.toLowerCase())
      .pop();

  return {
    props: {
      project,
      title,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
