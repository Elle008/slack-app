import React from 'react';
import Posts from "./Channel/Posts";
import NewPost from "./Channel/NewPost";
import Members from "./Members";
import EventsWidget from "./EventsWidget";

const Dashboard = () => {
  return (
    <main className="dashboard flex-row">
      <div className="col">
        <NewPost/>
        <Posts/>
      </div>
      <div className="col">
        <Members/>
        <EventsWidget/>
      </div>
    </main>
  );
}
 
export default Dashboard;