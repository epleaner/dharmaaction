import React from "react";

import Content from "@components/Content";
import NotFound from "@components/NotFound";

const Page = ({ name, title: pageTitle, content }) => {
  if (name === "404") return <NotFound />;

  return (
    <div>
      <h2>{pageTitle}</h2>
      {content.map(({ title, body, asset }) => (
        <Content key={title} {...{ title, body, asset }} />
      ))}
    </div>
  );
};

export default Page;
