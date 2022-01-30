import React from 'react';

export default function Activity( { activities, type, participants}) {
  return <div className="activityInfo">
      <h4>Activity : { activities } </h4>
      <h4>Type of activity : {type} </h4>
      <h4>No.of Participants : {participants} </h4>

  </div>;
}
