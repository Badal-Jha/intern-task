import React from "react";
import { useState } from "react";
const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <nav className=" flex flex-wrap  items-center  justify-between relative  px-2 py-3 bg-black ">
        <div className=" w-full px-4   flex flex-wrap justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:justify-start">
            <a
              className="text-sm text-white font-bold  inline-block mr-4 py-2 uppercase "
              href="#"
            >
              Photography
            </a>
            <button
              className="text-white cursor-pointer  px-3 py-1 block lg:hidden "
              type="button"
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? (
                <i class="fa fa-times" aria-hidden="true"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" + (navOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="items-center text-xs uppercase font-bold px-3 py-2 flex  text-white hover:text-slate-300 "
                  href="#"
                >
                  <span className="ml-2">Blog</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="items-center text-xs uppercase font-bold px-3 py-2 flex  text-white hover:text-slate-300 "
                  href="#"
                >
                  <span className="ml-2">Photos</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="items-center text-xs uppercase font-bold px-3 py-2 flex  text-white hover:text-slate-300 "
                  href="#"
                >
                  <span className="ml-2">Join</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="items-center text-xs uppercase font-bold px-3 py-2 flex  text-white hover:text-slate-300 "
                  href="#"
                >
                  <span className="ml-2">Learn More</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="items-center text-xs uppercase font-bold px-3 py-2 flex  text-white hover:text-slate-300 "
                  href="#"
                >
                  <span className="ml-2">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
