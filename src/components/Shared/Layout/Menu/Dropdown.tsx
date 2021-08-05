import ActiveLink from "@components/Shared/Layout/Menu/ActiveLink";

export default function Dropdown({ label, href, menuItems }) {
  return (
    <div className="relative flex flex-col items-end lg:block group">
      <ActiveLink {...{ label, href }} />
      <div className="absolute left-0 hidden w-48 lg:group-hover:block">
        <div className="px-4 py-2 mt-4 rounded-md shadow-lg bg-gray-50 dark:bg-gray-600 ring-1 ring-black ring-opacity-5 focus:outline-none">
          {menuItems.map((item) => {
            return (
              <ActiveLink
                key={item.label}
                label={item.label}
                href={item.href}
                showActive={false}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-end mt-8 lg:hidden">
        {menuItems.map((item) => {
          return (
            <ActiveLink
              key={item.label}
              label={item.label}
              href={item.href}
              showActive={false}
              className="mb-1 text-sm"
            />
          );
        })}
      </div>
    </div>
  );
}
