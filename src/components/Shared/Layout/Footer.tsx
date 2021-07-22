import { Facebook } from "@components/Shared/Icons";

const Footer = () => {
  return (
    <footer className="grid w-full grid-rows-3 gap-2 p-4 text-sm lg:p-10">
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
        <div className="mb-2">
          Website by <a href="https://elipleaner.com">Eli Pleaner</a>
        </div>
        Logo by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
