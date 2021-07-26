import Image from "next/image";
import Link from "next/link";

import himal from "public/assets/himal.jpg";
import leaf from "public/assets/leaf.jpg";
import monkeys from "public/assets/monkeys.jpg";

const LinkSection = ({ href, title, children, order }) => {
  const images = [himal, leaf, monkeys];
  const blurb = (
    <>
      <h2>{title}</h2>
      {children}
      <div>
        <Link {...{ href }}>
          <a>Learn More</a>
        </Link>
      </div>
    </>
  );

  return (
    <div className="my-24 -mx-4 md:-mx-32 xl:-mx-64">
      <div className="relative grid h-full grid-cols-1 xl:grid-cols-12">
        <div
          className={`col-span-5 ${
            order % 2 && "order-last"
          } flex items-center`}
        >
          {order % 2 ? (
            <div className="flex flex-col justify-center prose prose-2xl xl:mx-12 max-w-none">
              {blurb}
            </div>
          ) : (
            <div className="absolute grid w-full grid-cols-12">
              <div className="relative z-10 flex flex-col justify-center h-full col-span-7 mx-4 prose prose-2xl xl:mx-12 max-w-none">
                {blurb}
              </div>
            </div>
          )}
        </div>
        <div className="col-span-7">
          <Image
            src={images[order]}
            placeholder="blur"
            alt="Picture of the himalayas"
          />
        </div>
      </div>
    </div>
  );
};

export default LinkSection;
