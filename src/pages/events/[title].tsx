import React from "react";

import Event from "@components/Events/Event";
import ContentfulApi from "@utils/cms/contentful";

export default function EventsPage({ event }) {
  return <Event {...event} />;
}

export async function getStaticProps({ params }) {
  const { title } = params;

  const { event } = await ContentfulApi.getEvent({ title });

  return {
    props: {
      event,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
