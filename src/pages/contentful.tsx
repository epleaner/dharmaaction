import { fetchEntries } from "@cms/contentful/pages";
import Page from "@components/Page";

const ContentfulPage = ({ pages }) => (
  <div>
    {pages.map(({ title }) => (
      <Page key={title} title={title} />
    ))}
  </div>
);

export async function getStaticProps() {
  const res = await fetchEntries();
  const pages = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      pages,
    },
  };
}

export default ContentfulPage;
