import { Facebook } from "@components/Shared/Icons";

const Footer = () => {
  return (
    <footer className="grid w-full grid-rows-3 gap-2 p-4 text-sm bg-gray-100 lg:p-10 dark:bg-gray-700">
      <a
        className="w-6 prose hover:text-green-600"
        href="https://www.facebook.com/groups/DharmaActionNetworkforClimateEngagement"
      >
        <Facebook className="w-6 h-6 " />
      </a>

      <div className="prose">
        © 2021 Dharma Action Network for Climate Engagement
      </div>
      <div className="text-xs prose">
        Website by <a href="https://elipleaner.com">Eli Pleaner</a>
      </div>
    </footer>
  );
};

export default Footer;
