import React, { useContext, useState } from 'react'
import profile from "../../assets/profile/profileholder.png";
import NotificationTeacher from '../../components/NotificationTeacher.jsx';
import { notificaiton } from '../content/notification';
import { IndexElementContext } from '../Teacherassignment';
import Assignmentnotificationelement from '../../components/Assignmentnotificationelement';
import { assignmentteacher } from '../content/main';

const Notification = () => {

  const [indexElement,] = useContext(IndexElementContext)  ; 
  console.log(indexElement) ; 
  return (
    <div className="sticky right-0 top-0 flex max-h-[100vh] basis-[23%] flex-col gap-8 bg-white p-4">
      <div>
        <NotificationTeacher notificaiton={notificaiton} profile={profile} />
      </div>
      
      {
        indexElement?(
         <Assignmentnotificationelement element={assignmentteacher[indexElement-1]} />
        ):(<p>hello</p>) 
      }
      

    </div>
  );
}

export default Notification