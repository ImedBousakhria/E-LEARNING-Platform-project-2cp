import React from 'react'

function Course({groupe, description, time}) {
  return (
    <div>
      <p>{groupe}</p>
      <p>{description}</p>
      <p>{time}</p>
    </div>
  );
}

export default Course;