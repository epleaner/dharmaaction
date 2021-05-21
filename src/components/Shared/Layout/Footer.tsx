import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-4 text-sm bg-gray-100 dark:bg-gray-700">
      <div className="mb-2">
        Website by{" "}
        <a
          href="https://elipleaner.com"
          className="no-underline transition-colors hover:text-green-600"
        >
          Eli Pleaner
        </a>
      </div>
      <div>© 2021 Dharma Action Network for Climate Engagement</div>
    </footer>
  );
};

export default Footer;
