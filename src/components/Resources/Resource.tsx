import Link from "next/link";

import Content from "@components/Shared/Content";

const Resource = ({ title, body }) => {
  if (!title || !body) return null;
  const {
    json,
    links: {
      entries: { block },
    },
  } = body;

  return (
    <div className="prose max-w-none">
      <aside className="mb-4">
        <Link href="/resources">
          <a>Back to all resources</a>
        </Link>
      </aside>
      <h1>{title}</h1>
      <Content body={{ json }} hideTitle />
      {block.map((b) => (
        <Content key={b.title} {...b} hideTitle />
      ))}
    </div>
  );
};

export default Resource;
