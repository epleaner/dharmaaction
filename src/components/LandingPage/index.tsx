import ContentfulPage from "@components/ContentfulPage";
import LinkCard from "@components/Shared/LinkCard";

const index = ({ title, name, content }) => {
  return (
    <ContentfulPage {...{ title, name, content }} showTitle={false}>
      <div className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-3">
        <LinkCard href="/about">About</LinkCard>
        <LinkCard href="/local-groups">Local Groups</LinkCard>
        <LinkCard href="/projects">Projects</LinkCard>
      </div>
    </ContentfulPage>
  );
};

export default index;
