import ActiveLink from "@components/Shared/Layout/Menu/ActiveLink";
import Dropdown from "@components/Shared/Layout/Menu/Dropdown";

const NavItem = ({ href, label, menuItems }) => {
  return (
    <li className="mx-4 my-4 prose lg:my-0">
      {menuItems ? (
        <Dropdown {...{ href, label, menuItems }} />
      ) : (
        <ActiveLink {...{ href, label }} />
      )}
    </li>
  );
};

export default NavItem;
