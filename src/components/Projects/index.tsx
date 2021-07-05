import Link from "next/link";

import stringUtils from "@utils/string";

const Projects = ({ content }) => {
  return (
    <div className="grid prose">
      <section className=" dark:text-gray-200 prose-green">
        <h1 className="dark:text-gray-200">Projects</h1>
        <ul>
          {content.map((c) => (
            <li key={c.title}>
              <Link href={`/projects/${stringUtils.toUrl(c.title)}`}>
                <a>{c.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Projects;
