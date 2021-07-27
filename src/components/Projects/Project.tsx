import Link from "next/link";

import Content from "@components/Shared/Content";

const Project = (props) => {
  return (
    <article className="prose">
      <aside className="mb-10 prose">
        <Link href="/projects">
          <a>Back to all projects</a>
        </Link>
      </aside>
      <Content {...props} />
    </article>
  );
};

export default Project;
