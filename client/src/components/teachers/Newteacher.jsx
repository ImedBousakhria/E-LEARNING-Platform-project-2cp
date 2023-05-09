import React, { useState } from "react";
import publish from "../../assets/icons/publish.svg";
import axios from "axios";

const Newteacher = () => {
  const [teacher, setTeacher] = useState({});
  const [ready, setReady] = useState(false);
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTeacher((prevContent) => ({ ...prevContent, [name]: value }));
  };

  const addTeacher = async (user) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/createTeacher",
        user
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(await addTeacher(teacher));
  };

  return (
    <div className="mb-7 flex flex-col rounded-[10px] bg-white px-8 py-6 shadow-md">
      <p className="mb-3 text-lg font-semibold text-nightblue">
        Add a new teacher
      </p>

      <form
        className="flex flex-wrap justify-between gap-y-4"
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

        {/* ready ? */ (
          <button
            className=" mt-4 flex w-max items-center gap-2 place-self-end rounded-md bg-accent p-2 "
            type="submit"
          >
            <p className=" text-sm font-semibold text-white">Done</p>
            <img src={publish} alt="" />
          </button>
        ) /* : null */}
      </form>
    </div>
  );
};
export default Newteacher;
