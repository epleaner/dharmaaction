import { useMemo } from "react";

import Link from "next/link";

import ContentfulRichText from "@components/Shared/ContentfulRichText";
import NotFound from "@components/Shared/NotFound";
import date from "@utils/date";

const Event = ({ event }) => {
  const content = useMemo(() => {
    if (!event) return <NotFound />;

    const {
      title,
      startDate,
      endDate,
      subHeading,
      location,
      body,
      imagesCollection,
    } = event;

    return (
      <>
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
      </>
    );
  }, [event]);

  return (
    <article className="prose">
      <aside className="mb-10">
        <Link href="/events">
          <a>Back to all events</a>
        </Link>
      </aside>
      {content}
    </article>
  );
};

export default Event;
