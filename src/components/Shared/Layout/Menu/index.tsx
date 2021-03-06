import { useState } from "react";

import ActiveLink from "@components/Shared/Layout/Menu/ActiveLink";
import Links from "@components/Shared/Layout/Menu/Links";
import ThemeToggle from "@components/Shared/Layout/Menu/ThemeToggle";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const links = (
    <ul className="absolute z-10 flex flex-col items-end w-screen h-screen px-10 bg-gray-50 dark:bg-gray-600 lg:px-0 lg:flex-row lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:dark:bg-transparent">
      <Links />
    </ul>
  );

  return (
    <nav
      role="navigation"
      className="absolute w-full bg-gray-50 dark:bg-gray-600 lg:bg-transparent lg:dark:bg-transparent"
    >
      <div className="flex items-center justify-between pt-10 mx-4 lg:mx-10">
        <div className="flex items-center">
          <ActiveLink
            showActive={false}
            href="/"
            label="Dharma Action Network for Climate Engagement"
          />
        </div>
        <div className="flex">
          <div className="hidden pr-10 lg:block">{links}</div>
          <div className="flex items-center">
            <ThemeToggle />
            <div className="lg:hidden">
              <button
                className="flex items-center p-2 ml-6 link"
                type="button"
                onClick={() => setShowMenu((s) => !s)}
              >
                <svg
                  className="w-3 h-3 fill-current "
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
      </div>
      <div className={`lg:hidden ${!showMenu && "hidden"}`}>{links}</div>
    </nav>
  );
};

export default Menu;
