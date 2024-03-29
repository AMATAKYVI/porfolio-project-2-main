import Link from 'next/link';
import React, { useState } from 'react';
import * as Scroll from 'react-scroll';

import {
  Link as ScrollLink,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
function Header() {
  const [hidNav, setHidNav] = useState(false);
  const setToggleNav = () => {
    setHidNav(!hidNav);
  };
  const setToggleBlur = () => {
    setHidNav(false);
  };
  return (
    <div>
      <nav className="bg-zinc-100/20 shadow-sm shadow-gray-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 hover:shadow-md hover:shadow-gray-300 transition-all duration-500">
        <div className="container flex flex-wrap justify-between items-center mx-auto ">
          <Link href="/" className="flex items-center" passHref>
            <img
              src="/taklogo2.png"
              className="mr-3 h-9 w-10 sm:h-10 object-contain  cursor-pointer hover:shadow-md rounded-full transition-all duration-200"
              alt="Tak Logo"
            />
          </Link>
          <button
            tabIndex={0}
            onBlur={() => setToggleBlur()}
            onClick={() => setToggleNav()}
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <div>
              {!hidNav && (
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}

              {hidNav && (
                <svg
                  className=" w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </div>
          </button>
          {hidNav && (
            <div
              className={`relative w-full md:block md:w-auto`}
              id="mobile-menu"
            >
              <ul
                className={`flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:relative absolute w-full z-10 bg-white transition-all duration-200`}
              >
                <li className="cursor-pointer">
                  <ScrollLink
                    activeClass="active"
                    to="Education"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Education
                  </ScrollLink>
                </li>

                <li className="cursor-pointer">
                  <ScrollLink
                    activeClass="active"
                    to="Whyweb"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Why Web
                  </ScrollLink>
                </li>
                <li className="cursor-pointer">
                  <ScrollLink
                    activeClass="active"
                    to="Certifications"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Certifications
                  </ScrollLink>
                </li>
                <li className="cursor-pointer">
                  <ScrollLink
                    // activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </div>
          )}
          <div
            className={`relative w-full hidden md:block md:w-auto rounded-lg`}
            id="mobile-menu"
          >
            <ul
              className={`flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:relative absolute w-full z-10 bg-transparent  transition-all duration-200`}
            >
              <li className="cursor-pointer">
                <ScrollLink
                  //   activeClass="active"
                  to="Education"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Education
                </ScrollLink>
              </li>

              <li className="cursor-pointer">
                <ScrollLink
                  //   activeClass="active"
                  to="Whyweb"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Why
                </ScrollLink>
              </li>
              <li className="cursor-pointer">
                <ScrollLink
                  //   activeClass="active"
                  to="Certifications"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Certifications
                </ScrollLink>
              </li>
              <li className="cursor-pointer">
                <ScrollLink
                  //   activeClass="active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
