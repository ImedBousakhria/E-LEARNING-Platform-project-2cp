import React from 'react'
import assignmentfile from '../../../assets/icons/assignmentfile.svg' ; 
import fileholder from '../../../assets/icons/fileholder.svg' ; 



const StudentAssignmentElement = () => {
  return (
    <div>
      <div>
        <img src={assignmentfile} />
        <span>assignment name here</span>
      </div>

    </div>
  );
}

export default StudentAssignmentElement