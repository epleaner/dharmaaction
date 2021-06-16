import React from "react";

import Link from "next/link";

import ContentfulRichText from "@components/Shared/ContentfulRichText";
import date from "@utils/date";

const Event = ({
  title,
  startDate,
  endDate,
  subHeading,
  location,
  body,
  imagesCollection,
}) => {
  return (
    <article className="prose">
      <aside className="mb-10">
        <Link href="/events">
          <a>Back to All Events</a>
        </Link>
      </aside>
      <h1>{title}</h1>
      <h2>{subHeading}</h2>
      <p>{date.localDateRange(startDate, endDate)}</p>
      <p>{location}</p>
      <section>{body && <ContentfulRichText json={body.json} />}</section>
      {imagesCollection &&
        imagesCollection.items.map((i) => (
          <img
            key={i.title}
            src={i.url}
            alt={i.title}
            width={i.width}
            height={i.height}
          />
        ))}
    </article>
  );
};

export default Event;
