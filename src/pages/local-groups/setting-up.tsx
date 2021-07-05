import React from "react";

import ContentfulPage from "@components/ContentfulPage";
import ContentfulApi from "@utils/cms/contentful";

export default function LocalGroupPage({ page }) {
  return <ContentfulPage {...page} />;
}

export async function getStaticProps() {
  const { page = null } = await ContentfulApi.getPage(
    "Setting Up a DANCE Group"
  );

  return {
    props: {
      page,
    },
  };
}