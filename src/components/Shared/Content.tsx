import React from "react";

import ContentfulRichText from "@components/Shared/ContentfulRichText";

const Content = ({ title, hideTitle, alignment = "left", body, asset }) => {
  let content;

  if (asset)
    content = (
      <img
        src={asset.url}
        alt={title}
        width={asset.width}
        height={asset.height}
      />
    );
  else
    content = (
      <section className="pb-10">
        {!hideTitle && <h1>{title}</h1>}
        {body && <ContentfulRichText json={body.json} />}
      </section>
    );

  let align = "justify-left text-left";
  if (alignment === "center") align = "justify-center text-center";
  if (alignment === "right") align = "justify-end text-right";

  return <div className={`flex ${align}`}>{content}</div>;
};

export default Content;
