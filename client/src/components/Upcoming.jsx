import React from 'react'
import Upcomingelements from './Upcomingelements'
import { upcomings } from '../teacher/content/notification'

const Upcoming = () => {
  return (
    <div>
      <h2 className="text-[1.25rem]">Upcoming</h2>
      <div>
        {upcomings.map((Element) => {
          return (
            <Upcomingelements
              title={Element.title}
              time={Element.time}
              description={Element.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Upcoming