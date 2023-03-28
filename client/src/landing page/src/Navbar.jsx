import React from "react";
import logo from "./../../assets/logos/logo.svg";
import rightarrow from './../../assets/icons/rightarrow.svg' ; 


const Navbar = () => {
  return (
    <header className="w-full bg-primary">
      <nav className="mx-auto max-w-[1280px]">
        <ul className="flex items-center justify-between">
          <li>
            <a>
              <img src={logo} alt="elite school logo" />
            </a>
          </li>
          <li>
            <ul className="flex gap-6">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Programs</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </li>
          <li>
            <ul className="flex gap-4">
              <li>
                <form>
                  <label htmlFor="search">
                    <input name="search" id="search" placeholder="search" />
                  </label>
                </form>
              </li>
              <li>
                <span>
                  <img src={rightarrow} />
                </span>
                <a>Get started</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
