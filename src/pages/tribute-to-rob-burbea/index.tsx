import React from "react";

import TributeToRobBurbea from "@components/TributeToRobBurbea";
import ContentfulApi from "@utils/cms/contentful";

export default function TributeToRobBurbeaPage({ page }) {
  return <TributeToRobBurbea {...{ page }} />;
}

export async function getStaticProps() {
  const { page } = await ContentfulApi.getPage("Tribute to Rob Burbea");

  return {
    props: {
      page,
    },
  };
}
