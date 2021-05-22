import { Facebook } from "@components/Shared/Icons";

const Footer = () => {
  return (
    <footer className="grid w-full grid-rows-3 gap-2 p-4 text-sm bg-gray-100 dark:bg-gray-700">
      <a
        className="w-6 transition-colors hover:text-green-600"
        href="https://www.facebook.com/groups/DharmaActionNetworkforClimateEngagement"
      >
        <Facebook className="w-6 h-6 " />
      </a>
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
