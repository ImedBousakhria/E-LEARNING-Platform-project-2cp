import React, { useState } from "react";
import publish from "../../assets/icons/publish.svg";
import axios from "axios";

const Newstudent = () => {
  const [student, setStudent] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent((prevContent) => ({ ...prevContent, [name]: value }));
  };

  const addStudent = async (user) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/createStudent",
        user
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(await addStudent(student));
  };

  return (
    <div className="mb-7 flex flex-col rounded-[10px] bg-white px-8 py-6 shadow-md">
      <p className="mb-3 text-lg font-semibold text-nightblue">
        Add a new student
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
        <button
          className=" mt-4 flex w-max items-center gap-2 place-self-end rounded-md bg-accent p-2 "
          type="submit"
        >
          <p className=" text-sm font-semibold text-white">Done</p>
          <img src={publish} alt="" />
        </button>
      </form>
    </div>
  );
};
export default Newstudent;
