import Link from "next/link";

import ContentfulPage from "@components/ContentfulPage";

const LocalGroup = (props) => {
  return (
    <article>
      <aside className="mb-10 prose">
        <Link href="/local-groups">
          <a>Back to all local groups</a>
        </Link>
      </aside>
      <ContentfulPage {...props} />
    </article>
  );
};

export default LocalGroup;
