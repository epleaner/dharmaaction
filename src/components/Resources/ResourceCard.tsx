import Link from "next/link";

import stringUtils from "@utils/string";

const ResourceCard = ({ title }) => {
  return (
    <Link href={`/resources/${stringUtils.toUrl(title)}`}>
      <a>
        <div className="flex items-center justify-center h-64 px-10 prose transition-shadow shadow hover:shadow-xl">
          <h2 className="text-center">{title}</h2>
        </div>
      </a>
    </Link>
  );
};

export default ResourceCard;
