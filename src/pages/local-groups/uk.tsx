import React from "react";

import LocalGroup from "@components/LocalGroups/LocalGroup";
import ContentfulApi from "@utils/cms/contentful";

export default function LocalGroupPage({ page }) {
  return <LocalGroup {...page} />;
}

export async function getStaticProps() {
  const { page = null } = await ContentfulApi.getPage("UK DANCE Groups");

  return {
    props: {
      page,
    },
  };
}
