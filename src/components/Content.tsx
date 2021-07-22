import React from "react";

import ContentfulRichText from "@components/Shared/ContentfulRichText";

const Content = ({ title, hideTitle, body, asset }) => {
  if (body)
    return (
      <section className="pb-10">
        {!hideTitle && <h1>{title}</h1>}
        <ContentfulRichText json={body.json} />
      </section>
    );

  if (asset) {
    return (
      <img
        src={asset.url}
        alt={title}
        width={asset.width}
        height={asset.height}
      />
    );
  }
  return null;
};

export default Content;
