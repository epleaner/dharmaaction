import { useMemo } from "react";

import Link from "next/link";

import date from "@utils/date";

const EventSummary = ({ title, startDate, endDate, subHeading, location }) => {
  const url = useMemo(() => `${title.toLowerCase().replace(/\s+/g, "-")}`, [
    title,
  ]);

  return (
    <article className="prose">
      <Link href={`/events/${url}`}>
        <a>
          <h2>{title}</h2>
        </a>
      </Link>
      <h3>{subHeading}</h3>
      <p>{date.localDateRange(startDate, endDate)}</p>
      <p>{location}</p>
    </article>
  );
};

export default EventSummary;
