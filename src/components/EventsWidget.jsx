const EventsWidget = () => {
  return (
    <div className="box flex-col widget">
      <div className="widget-header flex-row">
        <h4>Upcoming Events</h4>
        <p className="flex-row">
          3
          <span className="material-symbols-outlined icon">calendar_month</span>
        </p>
      </div>
      <ul>
        <li className="flex-row">
          <p>Jul 20</p>
          <p>8:00am</p>
        </li>
        <li className="flex-row">
          <p>Jul 20</p>
          <p>8:00am</p>
        </li>
        <li className="flex-row">
          <p>Jul 20</p>
          <p>8:00am</p>
        </li>
      </ul>
      
    </div>
  );
}
 
export default EventsWidget;