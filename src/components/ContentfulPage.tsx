import React from "react";

import NotFound from "@components/NotFound";
import ContentfulRichRext from "@components/Shared/ContentfulRichText";

const Page = ({ name, title, content }) => {
  if (name === "404") return <NotFound />;

  return (
    <div>
      <h2>{title}</h2>
      {content.map(({ title: contentTitle, body: { json } }) => (
        <React.Fragment key={contentTitle}>
          <h3>{contentTitle}</h3>
          <ContentfulRichRext {...{ json }} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Page;
