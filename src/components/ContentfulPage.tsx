import React from "react";

import Content from "@components/Content";
import NotFound from "@components/Shared/NotFound";

const Page = ({ name, title: pageTitle, content }) => {
  if (name === "404") return <NotFound />;

  return (
    <div className="prose ">
      <h1>{pageTitle}</h1>
      {content.map((c) => (
        <Content key={c.title} {...c} />
      ))}
    </div>
  );
};

export default Page;
