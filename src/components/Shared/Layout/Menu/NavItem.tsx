import ActiveLink from "@components/Shared/Layout/Menu/ActiveLink";

const NavItem = ({ href, label }) => {
  return (
    <li className="mx-4 my-4 prose md:my-0">
      <ActiveLink {...{ href, label }} />
    </li>
  );
};

export default NavItem;
