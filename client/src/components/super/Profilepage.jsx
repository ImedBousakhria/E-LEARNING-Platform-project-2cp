import React from "react";
import Cancel from "../reusable/Cancel";
import bigSaid from "../../assets/images/displayedsaid.png";
import Edit from "../reusable/Edit";

const Profilepage = ({ name }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent((prevContent) => ({ ...prevContent, [name]: value }));
    console.log(student, event.target);
  };
  
  return (
    <div className="flex flex-col justify-between gap-2 rounded-[10px] bg-assignmentbg px-4 py-2">
      <div className=" flex items-center justify-between">
        <h4>{name}</h4>
        <Cancel />
      </div>
      <div className="border-t border-darkgray"></div>
      <img src={bigSaid} alt="" className="place-self-center" />
      <div className=" flex flex-col gap-3">
        <div className="profile-info">First name</div>
        <div className="profile-info">Last name</div>
        <div className="profile-info">Phone number</div>
        <div className="profile-info">Email</div>
        <div className="profile-info">Password</div>
      </div>

      <div className=" place-self-end">
        <Edit text="Edit" />
      </div>
    </div>
  );
};

export default Profilepage;

/*
<form
        className="flex flex-col justify-between gap-y-4"
        action=""
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          className="student-input"
          onChange={handleChange}
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last name"
          className="student-input"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="student-input"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="student-input"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone number"
          className="student-input"
          onChange={handleChange}
        />
      </form>

*/
