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
      <section className="">
        <h1>Upcoming Events</h1>
        {upcomingEvents}
      </section>
      <section className="prose ">
        <h1>Past Events</h1>
        {pastEvents}
      </section>
    </div>
  );
};

export default Events;
