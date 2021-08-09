import React from "react";

import ContentfulRichText from "@components/Shared/ContentfulRichText";

const Content = ({
  title = "",
  hideTitle = false,
  alignment = "left",
  body,
  asset = null,
}) => {
  let content;
  let blocks;

  if (body?.links) {
    blocks = body.links.assets.block.map(({ contentType, url }) => {
      if (contentType === "application/pdf")
        return (
          <div>
            <embed
              className="mb-2 h-96 w-96"
              type="application/pdf"
              src={url}
            />
            <a href={url}>Download</a>
          </div>
        );
      if (contentType === "audio/mpeg")
        return (
          <figure>
            <audio controls src={url} className="pb-2">
              <track kind="captions" />
              Your browser does not support the
              <code>audio</code> element.
            </audio>
            <a href={url}>Download</a>
          </figure>
        );
      return null;
    });
  }

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
      <>
        {!hideTitle && <h1>{title}</h1>}
        {body && <ContentfulRichText json={body.json} />}
      </>
    );

  let align = "justify-left text-left";
  if (alignment === "center") align = "justify-center text-center";
  if (alignment === "right") align = "justify-end text-right";

  return (
    <div className={`pb-10 flex ${align}`}>
      <div>
        {content}
        {blocks}
      </div>
    </div>
  );
};

export default Content;
