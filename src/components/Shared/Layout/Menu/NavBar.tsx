import React from "react";

const NavBar = () => {
  return (
    <nav className="shadow " role="navigation">
      <div className="container flex flex-wrap items-center p-4 mx-auto md:flex-no-wrap">
        <div className="mr-4 md:mr-8">
          <a href="#" rel="home">
            DANCE
          </a>
        </div>
        <div className="hidden ml-auto">
          <button
            className="flex items-center px-3 py-2 border rounded"
            type="button"
          >
            <svg
              className="w-3 h-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
          <ul className="flex flex-col pt-4 mt-4 -mx-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
            <li>
              <a
                className="block px-4 py-1 md:p-2 lg:px-4"
                href="#"
                title="Link"
              >
                Link
              </a>
            </li>
            <li>
              <a
                className="block px-4 py-1 text-purple-600 md:p-2 lg:px-4"
                href="#"
                title="Active Link"
              >
                Active Link
              </a>
            </li>
            <li>
              <a
                className="block px-4 py-1 md:p-2 lg:px-4"
                href="#"
                title="Link"
              >
                Link
              </a>
            </li>
          </ul>
          <ul className="flex flex-col pt-4 mt-4 -mx-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
            <li>
              <a
                className="block px-4 py-1 md:p-2 lg:px-4"
                href="#"
                title="Link"
              >
                Link
              </a>
            </li>
            <li>
              <a
                className="block px-4 py-1 text-purple-600 md:p-2 lg:px-4"
                href="#"
                title="Active Link"
              >
                Active Link
              </a>
            </li>
            <li>
              <a
                className="block px-4 py-1 md:p-2 lg:px-4"
                href="#"
                title="Link"
              >
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
