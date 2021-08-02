import React from "react";

import Resources from "@components/Resources";
import ContentfulApi from "@utils/cms/contentful";

export default function ResourcesPage({ page }) {
  return <Resources {...page} />;
}

export async function getStaticProps() {
  const page = await ContentfulApi.getResources();

  console.log(page);
  return {
    props: {
      page,
    },
  };
}
