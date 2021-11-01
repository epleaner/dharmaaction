import NavItem from "@components/Shared/Layout/Menu/NavItem";

const Links = () => {
  return (
    <>
      <NavItem
        href="/about"
        label="About"
        menuItems={[
          { label: "Mission", href: "/about#mission" },
          { label: "History", href: "/about#history" },
          { label: "Eco-Dharma", href: "/about#eco-dharma" },
          {
            label: "Tribute to Rob Burbea",
            href: "/tribute-to-rob-burbea",
          },
        ]}
      />
      <NavItem
        href="/local-groups"
        label="Local Groups"
        menuItems={[
          {
            label: "Find a group",
            href: "/local-groups#finding-a-local-group",
          },
          {
            label: "Start a group",
            href: "/local-groups#starting-a-local-group",
          },
        ]}
      />
      <NavItem
        href="/resources"
        label="Resources"
        menuItems={[
          {
            label: "Articles + Talks",
            href: "/resources/articles-and-talks-on-eco-dharma",
          },
          {
            label: "Books",
            href: "/resources/books",
          },
          {
            label: "Networks",
            href: "/resources/networks",
          },
          {
            label: "Divestment Links",
            href: "/resources/divestment-links",
          },
          {
            label: '"Our Sacred Earth" Meditation Dance',
            href: "/resources/-our-sacred-earth-meditation-dance",
          },
        ]}
      />
      <NavItem href="/projects" label="Projects" />
      <NavItem href="/events" label="Events" />
      <NavItem href="/contact" label="Contact" />
      <NavItem href="/mailing-list" label="Mailing List" />
    </>
  );
};

export default Links;
