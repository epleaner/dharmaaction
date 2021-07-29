import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES, BLOCKS } from "@contentful/rich-text-types";
import Link from "next/link";

const ContentfulRichText = ({ json }) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (q) => {
        console.log(q);
        return <span>img</span>;
      },
      [INLINES.HYPERLINK]: ({ content, data }) => (
        <Link href={data.uri}>
          <a>{content[0].value}</a>
        </Link>
      ),
    },
  };

  return documentToReactComponents(json, options) as JSX.Element;
};

export default ContentfulRichText;
