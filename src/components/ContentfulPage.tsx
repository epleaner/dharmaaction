import React from "react";

import Content from "@components/Content";
import NotFound from "@components/Shared/NotFound";

const Page = ({
  name,
  title: pageTitle,
  content,
  showTitle = true,
  children,
}) => {
  if (name === "404") return <NotFound />;
  console.log(content);
  return (
    <div>
      <div className="prose-sm prose lg:prose-lg max-w-none">
        {showTitle && <h1>{pageTitle}</h1>}
        {content.map((c) => (
          <Content key={c.title} {...c} />
        ))}
      </div>
      {children}
    </div>
  );
};

export default Page;
