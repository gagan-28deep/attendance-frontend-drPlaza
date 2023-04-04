import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = async () => {
    setShow(!show);
  };
  return (
    <div className="py-10">
      <nav className="relative px-8 py-4 flex justify-between items-center ">
        <a
          className="text-3xl font-bold leading-none flex items-center space-x-4"
          href="#"
        >
          <span className="text-gray-600 dark:text-gray-300 text-3xl">
            Doctors Plaza
          </span>
        </a>
        <div className="lg:hidden">
          <button
            onClick={handleClick}
            className="navbar-burger flex items-center text-gray-600 dark:text-gray-300 p-3"
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex lg:items-center lg:justify-end grow mr-4">
          <li>
            <a
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2 text-3xl"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <Link
              to="/signup"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2 text-3xl"
              href="#"
            >
              SIGN-UP
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2 text-3xl"
              href="#"
            >
              LOGIN
            </Link>
          </li>
          <li>
            <a
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2 text-3xl"
              href="https://www.doctorsplaza.in/"
              target="_blank"
            >
              Webiste
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
