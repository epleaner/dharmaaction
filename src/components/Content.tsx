import React from "react";

import ContentfulRichText from "@components/Shared/ContentfulRichText";

const Content = ({ title, hideTitle, body, asset }) => {
  if (body)
    return (
      <section>
        {!hideTitle && <h3>{title}</h3>}
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
