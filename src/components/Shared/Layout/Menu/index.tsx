import { useState } from "react";

import Link from "next/link";

import ThemeToggle from "@components/Shared/Layout/Menu/ThemeToggle";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const links = (
    <ul className="absolute flex flex-col items-end w-screen h-screen px-10 md:px-0 md:flex-row md:static md:h-auto md:w-auto md:bg-none bg-gray-50">
      <li className="mx-4 mb-4 md:mb-0">
        <Link href="/">
          <a>Events</a>
        </Link>
      </li>
      <li className="mx-4 mb-4 md:mb-0">
        <Link href="/">
          <a>Local Groups</a>
        </Link>
      </li>
      <li className="mx-4 mb-4 md:mb-0">
        <Link href="/">
          <a>Newsletters</a>
        </Link>
      </li>
      <li className="mx-4 mb-4 md:mb-0">
        <Link href="/">
          <a>Projects</a>
        </Link>
      </li>
      <li className="mx-4 mb-4 md:mb-0">
        <Link href="/">
          <a>Resources</a>
        </Link>
      </li>
      <li className="mx-4 mb-4 md:mb-0">
        <Link href="/">
          <a>Contact</a>
        </Link>
      </li>
      <li className="mx-4 mb-4 md:mb-0">
        <Link href="/">
          <a>Mailing List</a>
        </Link>
      </li>
    </ul>
  );

  return (
    <nav
      role="navigation"
      className="w-full bg-gray-50 dark:bg-gray-600 dark:text-gray-200"
    >
      <div className="flex items-center justify-between py-4 mx-10">
        <div>DANCE</div>
        <div className="hidden md:block">{links}</div>
        <div className="flex items-center">
          <ThemeToggle />
          <div className="md:hidden">
            <button
              className="flex items-center px-3 py-2"
              type="button"
              onClick={() => setShowMenu((s) => !s)}
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
        </div>
      </div>
      <div className={`md:hidden ${!showMenu && "hidden"}`}>{links}</div>
    </nav>
  );
};

export default Menu;
