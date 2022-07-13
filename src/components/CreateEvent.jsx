const CreateEvent = () => {
  return (
    <div className="modal">
      <form action="">
        <label htmlFor="eventName">Event Name</label>
        <input id="eventName" />
        <label htmlFor="eventDate">Date</label>
        <input type="date" id="eventDate" />
        <label htmlFor="eventStart">Start Time</label>
        <input type="time" id="eventStart" />
        <label htmlFor="duration">Duration</label>
        <div>
          <input type="number" />
          <select name="duration">
            <option value="minutes">min</option>
            <option value="hours">hr</option>
            <option value="days">day</option>
          </select>
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}
 
export default CreateEvent;