const CreateEvent = () => {
  return (
    <div className="col">
      <form action="" className="box">
        <h3>Create Event</h3>
        <label htmlFor="eventName">Event Name</label>
        <input id="eventName" />
        <label htmlFor="eventDate">Date</label>
        <input type="date" id="eventDate" />
        <label htmlFor="eventStart">Start Time</label>
        <input type="time" id="eventStart" />
        <label htmlFor="duration">Duration</label>
        <div className="flex-row">
          <input type="number" />
          <select name="duration">
            <option value="minutes" className="option">minutes</option>
            <option value="hours" className="option">hours</option>
            <option value="days" className="option">days</option>
          </select>
        </div>
        <label htmlFor="location">Location</label>
        <input id="evelocationntStart" />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}
 
export default CreateEvent;