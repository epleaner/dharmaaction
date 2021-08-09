import React from "react";

import Resource from "@components/Resources/Resource";
import ContentfulApi from "@utils/cms/contentful";

export default function ResourcePage({ resource }) {
  return <Resource {...resource} />;
}

export async function getStaticProps({ params }) {
  const { name } = params;
  const { resource = null } = await ContentfulApi.getResource({ name });
  console.log(resource);
  return {
    props: {
      resource,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
