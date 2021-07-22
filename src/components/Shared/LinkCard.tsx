import Link from "next/link";

const LinkCard = ({ href, children }) => {
  return (
    <div className="flex justify-center">
      <Link {...{ href }}>
        <a>
          <div className="flex items-center justify-center w-full h-64 text-2xl transition-shadow shadow md:w-48 md:h-48 hover:shadow-xl hover:cursor-pointer active:shadow-lg">
            {children}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default LinkCard;
