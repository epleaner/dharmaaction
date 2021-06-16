import { useMemo } from "react";

import Link from "next/link";

import date from "@utils/date";

const EventSummary = ({ title, startDate, endDate, subHeading, location }) => {
  const href = useMemo(
    () => `events/${title.toLowerCase().replace(/\w/, "-")}`,
    [title]
  );

  return (
    <article className="prose">
      <Link {...{ href }}>
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
