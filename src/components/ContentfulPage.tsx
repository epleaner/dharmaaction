import React from "react";

import Content from "@components/Content";
import NotFound from "@components/NotFound";

const Page = ({ name, title: pageTitle, content }) => {
  if (name === "404") return <NotFound />;

  return (
    <div className="prose dark:text-gray-200 prose-green">
      <h1 className="dark:text-gray-200">{pageTitle}</h1>
      {content.map(({ title, body, asset }) => (
        <Content key={title} {...{ title, body, asset }} />
      ))}
    </div>
  );
};

export default Page;
