import NavItem from "@components/Shared/Layout/Menu/NavItem";

const Links = () => {
  return (
    <>
      <NavItem href="/about" label="About" />
      <NavItem href="/projects" label="Projects" />
      <NavItem href="/events" label="Events" />
      <NavItem href="/local-groups" label="Local Groups" />
      <NavItem href="/resources" label="Resources" />
      <NavItem href="/contact" label="Contact" />
      <NavItem href="/mailing-list" label="Mailing List" />
    </>
  );
};

export default Links;
