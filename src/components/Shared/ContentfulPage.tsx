import React from "react";

import Content from "@components/Shared/Content";
import NotFound from "@components/Shared/NotFound";

const Page = ({ name, title: pageTitle, content, showTitle = true }) => {
  if (name === "404") return <NotFound />;

  return (
    <div>
      <div className="prose-sm prose lg:prose-lg max-w-none">
        {showTitle && <h1>{pageTitle}</h1>}
        {content.map((c) => (
          <Content key={c.title} {...c} />
        ))}
      </div>
    </div>
  );
};

export default Page;
