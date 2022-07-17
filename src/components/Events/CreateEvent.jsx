import React, { useEffect, useState } from 'react';
import { noError } from "../../helpers/checkError";

const CreateEvent = () => {
  const [event, setEvent] = useState({
    name: '',
    date: '',
    time: '',
    duration: '',
    location: ''
  })
  const [error, setError] = useState({
    name: '',
    date: '',
    time: ''
  })

  const handleChange = (e, input) => {
    setEvent(prev => ({...prev, [input]: e.target.value}))
    setError(prev => ({...prev, [input]: ''}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (noError(error)) {
      alert('new event')
    }
  }

  const handleBlur = (e) => {
    switch(e.target.name) {
      case 'name': 
        if (!e.target.value) {
          setError(prev => ({...prev, name: 'Event name is required'}))
          break
        }

      case 'date': 
      if (!e.target.value) {
        setError(prev => ({...prev, date: 'Event date is required'}))
        break
      }
      if (new Date(e.target.value).toDateString() < new Date().toDateString()) {
        setError(prev => ({...prev, date: 'Date is in the past'}))
        break
      }

      case 'time': 
      if (!e.target.value) {
        setError(prev => ({...prev, time: 'Start time is required'}))
        break
      }
      if (new Date(`${event.date} ${e.target.value}`) < new Date()) {
        setError(prev => ({...prev, time: 'Time is in the past'}))
        break
      }

      
    }
  }

  useEffect(() => {
    console.log(event);
  }, [event])
  return (
    <div className="col">
      <form className="box" onSubmit={handleSubmit}>
        <h3>Create Event</h3>
        <label>Event Name</label>
        {error.name && <p className="error">{error.name}</p>}
        <input name="name" value={event.name} onBlur={handleBlur} onChange={e => handleChange(e, 'name')}/>
        <label>Date</label>
        {error.date && <p className="error">{error.date}</p>}
        <input name="date" value={event.date} onBlur={handleBlur} onChange={e => handleChange(e, 'date')} type="date"/>
        <label>Start Time</label>
        {error.time && <p className="error">{error.time}</p>}
        <input name="time" value={event.time} onBlur={handleBlur} onChange={e => handleChange(e, 'time')} type="time"/>
        <label>Duration</label>
        <div className="flex-row">
          <input value={event.duration} type="number" min={0} onChange={e => handleChange(e, 'duration')} />
          <select>
            <option value="minutes" className="option">minutes</option>
            <option value="hours" className="option">hours</option>
            <option value="days" className="option">days</option>
          </select>
        </div>
        <label>Location</label>
        <input value={event.location} onChange={e => handleChange(e, 'location')}/>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}
 
export default CreateEvent;