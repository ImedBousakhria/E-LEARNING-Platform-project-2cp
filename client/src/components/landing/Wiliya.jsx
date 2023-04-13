import React from 'react'
import emailicon from "../../assets/icons/email.svg"; 
import locaitonicon from "../../assets/icons/location.svg"; 
import phoneicon from '../../assets/icons/phone.svg' ; 


const Wiliya = ({locaiton, email, phone, name}) => {
  return (
    <div className="flex basis-[49%] flex-col gap-4 py-[2rem] text-white">
      <h3>{name}</h3>
      <a className="flex gap-2">
        <span>
          <img src={locaitonicon} />
        </span>
        <span>{locaiton}</span>
      </a>
      <a className="flex gap-2">
        <span>
          <img src={emailicon} />
        </span>
        <span>{email}</span>
      </a>
      <a className="flex gap-2">
        <span>
          <img src={phoneicon} />
        </span>
        <span>{phone}</span>
      </a>
    </div>
  );
}

export default Wiliya