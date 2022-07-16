import React from 'react';
import Posts from "./Posts";
import NewPost from "./NewPost";

const Channel = () => {
  return (
    <main className="flex-col wide">
      <NewPost/>
      <Posts/>
    </main>
  );
}
 
export default Channel;