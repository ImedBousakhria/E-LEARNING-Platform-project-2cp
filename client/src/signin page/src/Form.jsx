import React, { useState, useEffect } from "react";
import info from "./../src/assets/icons/info.svg"
import showpwd from "./../src/assets/icons/showpwd.svg";
import hidepwd from "./../src/assets/icons/hidepwd.svg";
import dropdown from "./../src/assets/icons/dropdown.svg";

const Form = () => {
  const initValues = { email: "", password: "", user: "" };
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});
  const checkedInputs = { email: true, password: true, user: true };
  const [validInputs, setValidInput] = useState(checkedInputs);
  const [infoMsg, setInfoMsg] = useState("");
  const [isShown, setIsshown] = useState(true);
  const [userPicked, setUserPicked] = useState();

  const catchErrors = () => {
    if (errors.email !== undefined) {
      setValidInput((validInputs) => ({ ...validInputs, email: false }));
    } else {
      setValidInput((validInputs) => ({ ...validInputs, email: true }));
    }
    if (errors.password !== undefined) {
      setValidInput((validInputs) => ({ ...validInputs, password: false }));
    } else {
      setValidInput((validInputs) => ({ ...validInputs, password: true }));
    }
    if (errors.user !== undefined) {
      setValidInput((validInputs) => ({ ...validInputs, user: false }));
    } else {
      setValidInput((validInputs) => ({ ...validInputs, user: true }));
    }
  };

  const handleChange = (e) => {
    const { name } = e.target;
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(checkValues(values));
  };

  const checkValues = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    if (!values.user) {
      errors.user = "User is required";
    }
    return errors;
  };

  const displayInfo = () => {
    setInfoMsg("Your email must be activated by the school");
  };

  const toggle = () => {
    setIsshown(!isShown);
  };

  const pickUser = (e) => {
    setValues({ ...values, user: e.target.innerHTML });
    setUserPicked(true);
  };

  useEffect(() => {
    toggle();
  }, [values.user]);

  useEffect(() => {
    catchErrors();
  }, [errors]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-primary1 h-auto w-80 flex flex-col items-center"
    >
      <h1 className=" font-bold text-gray-800">Log in to your account</h1>

      <div className="flex flex-col w-64 text-sm mt-10 items-center">
        <div className="flex flex-col mb-6 w-full">
          <label>Email</label>
          <div
            className={validInputs.email ? "form-input" : "form-input-error"}
          >
            <input
              placeholder="Elitesstudent@gmail.com"
              className=" w-full pr-1 outline-none"
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <img
              src={info}
              alt="info"
              className=" w-5 cursor-pointer"
              onClick={displayInfo}
            />
          </div>
          <p className="text-gray-400 text-xs pl-1">{infoMsg}</p>
          <p className="text-ered text-xs pl-1">{errors.email}</p>
        </div>

        <div className="flex flex-col mb-6 w-full">
          <label>Password</label>
          <div
            className={validInputs.password ? "form-input" : "form-input-error"}
          >
            <input
              placeholder="Enter your password"
              type="password"
              name="password"
              value={values.password}
              className="w-full pr-1 outline-none"
              onChange={handleChange}
            />
            <img src={showpwd} alt="info" className="w-5" />
          </div>
          <p className="text-ered text-xs pl-1">{errors.password}</p>
        </div>

        <div className="flex flex-col mb-6 w-full">
          <label>Sign in as</label>
          <div
            className={
              validInputs.user
                ? "form-input cursor-pointer z-20"
                : "form-input-error cursor-pointer"
            }
            onClick={toggle}
          >
            {userPicked ? (
              values.user
            ) : (
              <span className=" text-gray-400">Select here</span>
            )}
            <img
              src={dropdown}
              alt=""
              className={
                isShown
                  ? "rotate-180 w-5 transition-all ease-in-out duration-700"
                  : "w-5 transition-all ease-in-out duration-300"
              }
            />
          </div>

          <div className="relative">
            <ul
              className={
                isShown
                  ? "cursor-pointer px-0 bg-white rounded-sm absolute z-10 w-full visible"
                  : "hidden"
              }
            >
              <li
                className="py-2 pl-2 border font-semibold border-x-0 "
                onClick={pickUser}
              >
                Student
              </li>
              <li
                className="py-2 pl-2 border font-semibold border-x-0 "
                onClick={pickUser}
              >
                Teacher
              </li>
              <li
                className="py-2 pl-2 border font-semibold border-x-0 "
                onClick={pickUser}
              >
                Employee
              </li>
            </ul>
          </div>
          <p className=" text-ered text-xs pl-1">{errors.user}</p>
        </div>

        <button
          type="submit"
          className=" bg-bblue hover:bg-blue-600 hover:shadow-inner font-semibold text-white px-2 py-2.5 rounded-md mt-6 w-full"
        >
          Sign in
        </button>
        <a href="#" className="text-b2blue cursor-pointer mt-3">
          Forgot your password?
        </a>
      </div>
    </form>
  );
};

export default Form;
