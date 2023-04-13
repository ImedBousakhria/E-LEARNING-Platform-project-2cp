import React, { useState } from "react";
import logo from "./../../assets/logos/logo.svg";
import { links } from "../content/navbar";
import GetStarted from "../../components/landing/GetStarted";
import Search from "../../components/reusable/Search";

const Navbar = () => {
  const [focused, setFocused] = useState([true, false, false]);

  return (
    <header className="box-shadow sticky top-0 z-10 w-full  bg-primary">
      <nav className="z-10 mx-auto max-w-[1280px]">
        <ul className="z-10 flex min-h-full items-center justify-between">
          <li>
            <a>
              <img src={logo} alt="elite school logo" />
            </a>
          </li>
          <li className="min-h-full">
            <ul className="flex min-h-full gap-6 font-bold">
              {links.map((Element, index) =>
                focused[index] ? (
                  <a
                    href={`#${Element}`}
                    className="hovered  min-h-full px-4 py-3 text-center"
                  >
                    <span>{Element}</span>
                  </a>
                ) : (
                  <a
                    href={`#${Element}`}
                    className=" link  min-h-full px-4 py-3 text-center"
                    onClick={() => {
                      setFocused(
                        focused.map((Element, i) => {
                          return i === index;
                        })
                      );
                    }}
                  >
                    <span>{Element}</span>
                  </a>
                )
              )}
            </ul>
          </li>
          <li>
            <ul className="flex gap-4">
              <li>
                <Search />
              </li>
              <li className="">
                <GetStarted text={"Get started"} />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
