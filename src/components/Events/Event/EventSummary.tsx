import { useMemo } from "react";

import dayjs from "dayjs";
import Link from "next/link";

const EventSummary = ({ title, startDate, endDate, subHeading, location }) => {
  const href = useMemo(
    () => `events/${title.toLowerCase().replaceAll(" ", "-")}`,
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
      <p>
        {dayjs(startDate).format("DD/MM/YYYY")} -{" "}
        {dayjs(endDate).format("DD/MM/YYYY")}
      </p>
      <p>{location}</p>
    </article>
  );
};

export default EventSummary;
