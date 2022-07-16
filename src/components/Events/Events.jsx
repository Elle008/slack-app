import React from 'react';
import CreateEvent from "./CreateEvent";
import EventDetails from "./EventDetails";

const Events = () => {
  return (
    <main className="events flex-row">
      <div className="col">
        <EventDetails/>
      </div>
        <CreateEvent/>
    </main>
  );
}
 
export default Events;