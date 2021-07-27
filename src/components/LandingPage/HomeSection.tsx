import Image from "next/image";

import Content from "@components/Shared/Content";
import himal from "public/assets/himal.jpg";
import leaf from "public/assets/leaf.jpg";
import monkeys from "public/assets/monkeys.jpg";

const LinkSection = ({ content, order }) => {
  const images = [himal, leaf, monkeys];
  const blurb = (
    <>
      <h2>{content.title}</h2>
      <Content key={content.title} {...content} />
    </>
  );

  return (
    <div className="my-24 -mx-4 md:-mx-32 xl:-mx-64">
      <div className="relative grid h-full grid-cols-1 md:grid-cols-12">
        <div
          className={`md:col-span-6 xl:col-span-5 ${
            order % 2 && "order-last"
          } flex items-center`}
        >
          <div className="flex flex-col justify-center mx-4 prose lg:prose-lg xl:prose-xl lg:mx-10 max-w-none">
            {blurb}
          </div>
        </div>
        <div className="items-center hidden md:flex md:col-span-6 xl:col-span-7">
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
