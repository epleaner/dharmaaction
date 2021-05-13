import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const ContentfulRichText = ({ json }) => {
  return (
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: documentToHtmlString(json),
      }}
    />
  );
};

export default ContentfulRichText;
