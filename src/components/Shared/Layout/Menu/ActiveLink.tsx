import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ href, label, ...otherProps }) => {
  const router = useRouter();

  return (
    <div {...otherProps}>
      <Link {...{ href }}>
        <a
          className={`transition-colors hover:text-green-600 ${
            router.asPath.includes(href) ? "text-green-600" : ""
          } `}
        >
          {label}
        </a>
      </Link>
    </div>
  );
};

export default ActiveLink;
