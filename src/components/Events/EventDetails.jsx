import React from 'react';
import photo from '../../assets/profile.png'

const EventDetails = () => {
  return (
    <ul className="events-list">
      <li className="event-info box">
        <h3>Project Meeting</h3>
        <p className="flex-row">
          <span class="material-symbols-outlined icon">schedule</span>
          12:00pm 
        </p>
        <p className="flex-row">
          <span class="material-symbols-outlined icon">pin_drop</span>
          zoom meeting
        </p>
        <p className="txt-xs">Created by Ellaine Dela Cruz</p>
        <span class="material-symbols-outlined icon more">more_horiz</span>
      </li>

      <li className="event-info box">
        <h3>Project Meeting</h3>
        <p className="flex-row">
          <span class="material-symbols-outlined icon">schedule</span>
          12:00pm 
        </p>
        <p className="flex-row">
          <span class="material-symbols-outlined icon">pin_drop</span>
          zoom meeting
        </p>
        <p className="txt-xs">Created by Ellaine Dela Cruz</p>
        <span class="material-symbols-outlined icon more">more_horiz</span>
      </li>

      <li className="event-info box">
        <h3>Project Meeting</h3>
        <p className="flex-row">
          <span class="material-symbols-outlined icon">schedule</span>
          12:00pm 
        </p>
        <p className="flex-row">
          <span class="material-symbols-outlined icon">pin_drop</span>
          zoom meeting
        </p>
        <p className="txt-xs">Created by Ellaine Dela Cruz</p>
        <span class="material-symbols-outlined icon more">more_horiz</span>
      </li>
    </ul>
  );
}
 
export default EventDetails;