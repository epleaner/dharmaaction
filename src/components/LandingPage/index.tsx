import ContentfulPage from "@components/ContentfulPage";

const index = ({ title, name, content }) => {
  return <ContentfulPage {...{ title, name, content }} />;
};

export default index;
