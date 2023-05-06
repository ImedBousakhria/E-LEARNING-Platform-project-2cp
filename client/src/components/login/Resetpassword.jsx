import React from "react";
import { useState } from "react";
import info from "../../assets/icons/info.svg";
import { useContext } from "react";
import { loginContext } from "../../signin page/Login";

const Resetpassword = () => {
  const { setShowLoginForm } = useContext(loginContext);

  const initValues = { email: "", password: "", user: "" };
  const [values, setValues] = useState(initValues);
  const [infoMsg, setInfoMsg] = useState("");

  const handleChange = (e) => {
    const { name } = e.target;
    setValues({ ...values, [name]: e.target.value });
  };


  const displayInfo = () => {
    setInfoMsg("Your email must be activated by the school");
  };
  return (
    <div className="flex w-full flex-col items-center justify-between gap-10">
      <div className="flex flex-col gap-7">
        <p className=" text-center font-bold text-nightblue ">Reset your password</p>
        <div className="max-w-xs text-center">
          <p className=" overflow-hidden whitespace-normal text-sm leading-5">
            Enter your email for the verification process, we will send reset
            password link to your email.
          </p>
        </div>
      </div>

      <div className="mb-3 flex w-full flex-col">
        <label htmlFor="email" className="pb-1">
          Email
        </label>
        <div
          className="form-input" /* className={validInputs.email ? "form-input" : "form-input-error"} */
        >
          <input
            id="email"
            placeholder="Elitesstudent@gmail.com"
            className=" w-full border-0 p-0 pr-1 placeholder-gray outline-none rounded-none"
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
        {/*     <p className="pl-1 pt-0.5 text-xs text-red">{errors.email}</p> */}
      </div>
      <div className="flex w-full flex-col items-center gap-4">
        <button
          type="submit"
          className=" -mt-3 w-full rounded-md bg-accent px-2 py-2.5 font-semibold text-white hover:shadow-inner"
        >
          Continue
        </button>
        <a
          href="#"
          className=" cursor-pointer text-blue"
          onClick={() => setShowLoginForm(true)}
        >
          Log in?
        </a>
      </div>
    </div>
  );
};

export default Resetpassword;
/* onClick={() => setShowLoginForm(true)} */
