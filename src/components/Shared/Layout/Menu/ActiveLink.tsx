import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ href, showActive = true, label, ...otherProps }) => {
  const router = useRouter();

  return (
    <div {...otherProps}>
      <Link {...{ href }}>
        <a>
          <span
            className={`text-gray-700 link pb-2 border-dotted border-opacity-75 border-b-4 border-transparent hover:text-green-600 ${
              router.asPath.includes(href) && showActive && "border-green-500"
            }`}
          >
            {label}
          </span>
        </a>
      </Link>
    </div>
  );
};

export default ActiveLink;
