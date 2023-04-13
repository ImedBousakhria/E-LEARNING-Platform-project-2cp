import React from "react";
import Info from "../../../components/reusable/Info";
import phone from "../../../assets/icons/phonewhite.svg";
import email from "../../../assets/icons/emailwhite.svg";
import help from "../../../assets/sideicons/help.svg";

const Help = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 rounded-[10px] bg-navy p-4 text-white">
      <div>
        <img src={help} />
      </div>
      <Info icon={phone} number={"+213 770 375 299"} />
      <Info icon={phone} number={"+213 770 307 515"} />
      <Info icon={email} number={"elitesalgerie@gmail.com"} />
    </div>
  );
};

export default Help;
