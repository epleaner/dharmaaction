import React from "react";

import Events from "@components/Events";
import ContentfulApi from "@utils/cms/contentful";

export default function EventsPage({ events }) {
  return <Events {...{ events }} />;
}

export async function getStaticProps() {
  const { events } = await ContentfulApi.getEvents();

  return {
    props: {
      events,
    },
  };
}
