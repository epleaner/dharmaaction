import ActiveLink from "@components/Shared/Layout/Menu/ActiveLink";

const NavItem = ({ href, label }) => {
  return (
    <li className="mx-4 my-2 md:my-0">
      <ActiveLink {...{ href, label }} />
    </li>
  );
};

export default NavItem;
