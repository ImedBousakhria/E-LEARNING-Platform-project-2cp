import React, { useState, useEffect } from "react";
import info from "../../assets/icons/info.svg"
import showpwd from "../../assets/icons/showpwd.svg";
import dropdown from "../../assets/icons/dropdown.svg";

const Form = () => {
  const initValues = { email: "", password: "", user: "" };
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});
  const checkedInputs = { email: true, password: true, user: true };
  const [validInputs, setValidInput] = useState(checkedInputs);
  const [infoMsg, setInfoMsg] = useState("");
  const [isShown, setIsshown] = useState(false);
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
    toggle()
  };

  useEffect(() => {
    catchErrors();
  }, [errors]);

  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-transparant h-auto w-max flex flex-col items-center"
    >
      <h3 className=" font-bold text-nightblue tracking-wider">Log in to your account</h3>

      <div className="flex flex-col w-90 text-sm mt-10 items-center">
        <div className="flex flex-col mb-6 w-full">
          <label htmlFor="email" className="pb-1">Email</label>
          <div
            className={validInputs.email ? "form-input" : "form-input-error"}
          >
            <input
              id="email"
              placeholder="Elitesstudent@gmail.com"
              className=" w-full pr-1 outline-none placeholder-gray"
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
          <p className="text-darkgray text-xs pl-1 pt-1">{infoMsg}</p>
          <p className="text-red text-xs pl-1 pt-0.5">{errors.email}</p>
        </div>

        <div className="flex flex-col mb-6 w-full">
          <label htmlFor="password" className="pb-1">Password</label>
          <div
            className={validInputs.password ? "form-input" : "form-input-error"}
          >
            <input
              id="password"
              placeholder="Enter your password"
              type="password"
              name="password"
              value={values.password}
              className="w-full pr-1 outline-none placeholder-gray"
              onChange={handleChange}
            />
            <img src={showpwd} alt="info" className="w-5" />
          </div>
          <p className="text-red text-xs pl-1 pt-0.5">{errors.password}</p>
        </div>

        <div className="flex flex-col mb-6 w-full">
          <label className="pb-1">Sign in as</label>
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
              <span className=" text-gray">Select here</span>
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

          <div className="relative w-72">
            <ul
              className={
                isShown
                  ? "cursor-pointer px-0 bg-white rounded-sm absolute z-10 w-full opacity-100"
                  : "hidden opacity-0"
              }
            >
              <li
                className="py-2 pl-2 border font-semibold border-x-0 border-gray hover:bg-gray "
                onClick={pickUser}
              >
                Student
              </li>
              <li
                className="py-2 pl-2 border font-semibold border-x-0 border-gray hover:bg-gray "
                onClick={pickUser}
              >
                Teacher
              </li>
              <li
                className="py-2 pl-2 border font-semibold border-x-0 border-gray hover:bg-gray "
                onClick={pickUser}
              >
                Employee
              </li>
            </ul>
          </div>
          <p className=" text-red text-xs pl-1 pt-0.5">{errors.user}</p>
        </div>

        <button
          type="submit"
          className=" bg-accent hover:shadow-inner font-semibold text-white px-2 py-2.5 rounded-md mt-6 w-72"
        >
          Sign in
        </button>
        <a href="#" className=" text-blue cursor-pointer mt-3">
          Forgot your password?
        </a>
      </div>
    </form>
  );
};

export default Form;
