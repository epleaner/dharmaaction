import { useMemo } from "react";

import EventSummary from "@components/Events/Event/EventSummary";

const Events = ({ events }) => {
  const { upcoming, past } = events;

  const upcomingEvents = useMemo(
    () =>
      upcoming.items.length ? (
        upcoming.items.map((e) => <EventSummary key={e.sys.id} {...e} />)
      ) : (
        <p>No upcoming events.</p>
      ),
    [upcoming.items]
  );

  const pastEvents = useMemo(
    () =>
      past.items.length ? (
        past.items.map((e) => <EventSummary key={e.sys.id} {...e} />)
      ) : (
        <p>No past events.</p>
      ),
    [past.items]
  );

  return (
    <div className="grid prose">
      <section className=" dark:text-gray-200 prose-green">
        <h1 className="dark:text-gray-200">Upcoming Events</h1>
        {upcomingEvents}
      </section>
      <section className="prose dark:text-gray-200 prose-green">
        <h1 className="dark:text-gray-200">Past Events</h1>
        {pastEvents}
      </section>
    </div>
  );
};

export default Events;
