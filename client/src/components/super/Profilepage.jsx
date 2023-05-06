import React, { useContext, useState } from "react";
import Cancel from "../reusable/Cancel";
import bigSaid from "../../assets/images/displayedsaid.png";
import Edit from "../reusable/Edit";
import Logout from "../reusable/Logout";
import Done from "../reusable/Done";
import { authContext } from "../../App";
import changepfp from "../../assets/icons/changepfp.svg";
import { propsContext } from "../../content page/Mainapp";

const Profilepage = ({ name }) => {
  const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevContent) => ({ ...prevContent, [name]: value }));
    console.log(userInfo);
  };

  const handleEditMode = () => {
    setEditMode(true);
  };
  const { profileShown, setProfileShown } = useContext(propsContext)
    const { setToken } = useContext(authContext); 
  return (
    profileShown && (
      <div className="flex flex-col justify-between gap-[3rem] rounded-[10px] bg-assignmentbg px-4 py-2">
        <div className="flex flex-col gap-2.5 ">
          <div className=" flex items-center justify-between">
            <h4>{name}</h4>
            <Cancel onClick={() => setProfileShown(false)} />
          </div>
          <div className="w-[80%] place-self-center border-t border-darkgray "></div>
        </div>

        {!editMode ? (
          <div className="flex flex-col justify-between gap-[3rem] ">
            <img src={bigSaid} alt="" className="place-self-center" />
            <div className=" flex flex-col gap-3">
              <div className="profile-info">First name</div>
              <div className="profile-info">Last name</div>
              <div className="profile-info">Phone number</div>
              <div className="profile-info">Email</div>
              <div className="profile-info">Password</div>
            </div>

            <div className="flex gap-1.5 place-self-end ">
              <Logout
                onClick={() => {
                  setToken(null); 
                }}
              />
              <div onClick={handleEditMode}>
                <Edit text="Edit" />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-between gap-[3rem]">
            <div className="relative place-self-center">
              <img src={bigSaid} alt="" />
              <img
                src={changepfp}
                alt=""
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer"
              />
            </div>

            <form className="flex flex-col justify-between gap-y-3" action="">
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
            <div className="place-self-end">
              <Done onClick={() => setEditMode(false)} />
            </div>
          </div>
        )}
      </div>
    )
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
