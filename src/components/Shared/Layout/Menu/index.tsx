import { useState } from "react";

import ActiveLink from "@components/Shared/Layout/Menu/ActiveLink";
import NavItem from "@components/Shared/Layout/Menu/NavItem";
import ThemeToggle from "@components/Shared/Layout/Menu/ThemeToggle";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const links = (
    <ul className="absolute flex flex-col items-end w-screen h-screen px-10 bg-gray-50 dark:bg-gray-600 md:px-0 md:flex-row md:static md:h-auto md:w-auto md:bg-transparent md:dark:bg-transparent">
      <NavItem href="/events" label="Events" />
      <NavItem href="/local-groups" label="Local Groups" />
      <NavItem href="/newsletters" label="Newsletters" />
      <NavItem href="/projects" label="Projects" />
      <NavItem href="/resources" label="Resources" />
      <NavItem href="/contact" label="Contact" />
      <NavItem href="/mailing-list" label="Mailing List" />
    </ul>
  );

  return (
    <nav
      role="navigation"
      className="absolute w-full bg-gray-50 dark:bg-gray-600 md:bg-transparent md:dark:bg-transparent"
    >
      <div className="flex items-center justify-between py-4 mx-4 md:mx-10">
        <ActiveLink showActive={false} href="/" label="DANCE" />
        <div className="flex">
          <div className="hidden pr-10 md:block">{links}</div>
          <div className="flex items-center">
            <ThemeToggle />
            <div className="md:hidden">
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
      <div className={`md:hidden ${!showMenu && "hidden"}`}>{links}</div>
    </nav>
  );
};

export default Menu;
