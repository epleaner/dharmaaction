import ActiveLink from "@components/Shared/Layout/Menu/ActiveLink";

export default function Dropdown({ label, href, menuItems }) {
  return (
    <li className="relative group">
      <ActiveLink {...{ label, href }} />
      <div className="absolute left-0 hidden origin-top-right lg:group-hover:block">
        <div className="px-4 py-2 mt-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {menuItems.map((item) => {
            return (
              <div key={item.label}>
                <div>
                  <ActiveLink label={item.label} href={item.href} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:hidden">
        {menuItems.map((item) => {
          return (
            <div key={item.label}>
              <div>
                <ActiveLink
                  label={item.label}
                  href={item.href}
                  className="text-sm"
                />
              </div>
            </div>
          );
        })}
      </div>
    </li>
  );
}
