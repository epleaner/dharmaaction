import Image from "next/image";
import Link from "next/link";

import Himal from "public/himal.jpg";

const LinkSection = ({ href, title, children, order }) => {
  return (
    <div className="grid grid-cols-1 my-24 -mx-4 xl:grid-cols-12 md:-mx-32 xl:-mx-64">
      <div className={`col-span-5 ${order % 2 && "order-last"}`}>
        <div className="flex flex-col justify-center h-full mx-4 prose xl:mx-12">
          <h2>{title}</h2>
          {children}
          <div>
            <Link {...{ href }}>
              <a>Learn More</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-7">
        <Image src={Himal} placeholder="blur" alt="Picture of the himalayas" />
      </div>
    </div>
  );
};

export default LinkSection;
