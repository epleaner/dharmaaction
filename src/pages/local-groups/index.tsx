import React from "react";

import LocalGroups from "@components/LocalGroups";
import ContentfulApi from "@utils/cms/contentful";

export default function LocalGroupsPage({ page }) {
  return <LocalGroups {...{ page }} />;
}

export async function getStaticProps() {
  const { page } = await ContentfulApi.getPage("Local Groups");

  return {
    props: {
      page,
    },
  };
}
