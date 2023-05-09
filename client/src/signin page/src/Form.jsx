import React, { useState, useEffect, useContext } from "react";
import info from "../../assets/icons/info.svg";
import showpwd from "../../assets/icons/showpwd.svg";
import dropdown from "../../assets/icons/dropdown.svg";
import axios from "axios";
import { authContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { loginContext } from "../Login";

const Form = ({ setToken, setUser }) => {
  const { setShowLoginForm } = useContext(loginContext);
/*   const { setToken, setUser } = useContext(authContext);
 */
  const initValues = { email: "", password: "", user: "" };
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});
  const checkedInputs = { email: true, password: true, user: true };
  const [validInputs, setValidInput] = useState(checkedInputs);
  const [infoMsg, setInfoMsg] = useState("");
  const [isShown, setIsshown] = useState(false);
  const [userPicked, setUserPicked] = useState();
  const navigate = useNavigate();

  const loginUser = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        email: email,
        password: password,
      });
      console.log(response.data)
      const { token, user } = response.data;
      setToken(token);
      setUser(user);
      
      localStorage.setItem("token", token);
      navigate("/Home");
      // store token and user in local storage or state
      return { token, user };
    } catch (error) {
      /* setErrors((prev) => {
        return { ...prev, password: "incorrect password" };
      }); */
      if (error.response.data.errors.email === 'That email is not registered') {
        console.log('hey')
        setErrors((prev) => {
          return { ...prev, email: "That email is not registered" };
        });
      } else if (error.response.data.errors.password === 'That password is incorrect') {
        setErrors((prev) => {
        return { ...prev, password: "incorrect password" };
      });
      }
      
      console.log(error.response.data.errors.email);
      return { error: error.response.data };
    }
  };

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
    console.log(values)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(checkValues(values));

    const { token, user, error } = await loginUser(
      values.email,
      values.password
    );

    if (error) {
      console.log("Login error:", error);
    } else {
      console.log("Login success:", user, token);
      // redirect to dashboard or some other page
    }
    if (error.email === 'incorrect email') {
      console.log('hey')
      setErrors((prev) => {
        return { ...prev, email: "That email is not registered" };
      });
    } else if (error.password === 'incorrect password') {
      setErrors((prev) => {
      return { ...prev, password: "incorrect password" };
    });
    }
   
  };

  // check front validation
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
    toggle();
  };

  useEffect(() => {
    catchErrors();
  }, [errors]);

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex h-auto w-max flex-col items-center bg-transparant"
    >
      <h3 className=" font-bold tracking-wider text-nightblue">
        Log in to your account
      </h3>

      <div className="w-90 mt-10 flex flex-col items-center text-sm">
        <div className="mb-6 flex w-full flex-col">
          <label htmlFor="email" className="pb-1">
            Email
          </label>
          <div
            className={validInputs.email ? "form-input" : "form-input-error"}
          >
            <input
              id="email"
              placeholder="Elitesstudent@gmail.com"
              className=" w-full rounded-none border-0 p-0 pr-1 placeholder-gray outline-none"
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
          <p className="pl-1 pt-1 text-xs text-darkgray">{infoMsg}</p>
          <p className="pl-1 pt-0.5 text-xs text-red">{errors.email}</p>
        </div>

        <div className="mb-6 flex w-full flex-col">
          <label htmlFor="password" className="pb-1">
            Password
          </label>
          <div
            className={validInputs.password ? "form-input" : "form-input-error"}
          >
            <input
              id="password"
              placeholder="Enter your password"
              type="password"
              name="password"
              value={values.password}
              className="w-full rounded-none border-0 p-0 pr-1 placeholder-gray outline-none"
              onChange={handleChange}
            />
            <img src={showpwd} alt="info" className="w-5" />
          </div>
          <p className="pl-1 pt-0.5 text-xs text-red">{errors.password}</p>
        </div>

        <div className="mb-6 flex w-full flex-col">
          <label className="pb-1">Sign in as</label>
          <div
            className={
              validInputs.user
                ? "form-input z-20 cursor-pointer"
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
                  ? "w-5 rotate-180 transition-all duration-500 ease-in-out"
                  : "w-5 transition-all duration-200 ease-in-out"
              }
            />
          </div>

          <div className="relative w-72">
            <ul
              className={
                isShown
                  ? "absolute z-10 w-full cursor-pointer rounded-sm bg-white px-0 opacity-100"
                  : "hidden opacity-0"
              }
            >
              <li
                className="border border-x-0 border-gray py-2 pl-2 font-semibold hover:bg-gray "
                onClick={pickUser}
              >
                Student
              </li>
              <li
                className="border border-x-0 border-gray py-2 pl-2 font-semibold hover:bg-gray "
                onClick={pickUser}
              >
                Teacher
              </li>
              <li
                className="border border-x-0 border-gray py-2 pl-2 font-semibold hover:bg-gray "
                onClick={pickUser}
              >
                Employee
              </li>
            </ul>
          </div>
          <p className=" pl-1 pt-0.5 text-xs text-red">{errors.user}</p>
        </div>

        <button
          type="submit"
          className=" mt-6 w-72 rounded-md bg-accent px-2 py-2.5 font-semibold text-white hover:shadow-inner"
        >
          Sign in
        </button>
        <a
          href="#"
          className=" mt-3 cursor-pointer text-blue"
          onClick={() => setShowLoginForm(false)}
        >
          Forgot your password?
        </a>
      </div>
    </form>
  );
};

export default Form;
