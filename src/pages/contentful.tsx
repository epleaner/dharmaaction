import ContentfulPage from "@components/ContentfulPage";
import ContentfulApi from "@utils/cms/contentful";

const Contentful = ({ page }) => {
  const { title, name, content } = page;

  return <ContentfulPage key={name} {...{ title, name, content }} />;
};

export async function getStaticProps() {
  const { page } = await ContentfulApi.getPage("Home Page");

  return {
    props: {
      page,
    },
  };
}

export default Contentful;
