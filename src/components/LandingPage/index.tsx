import Content from "@components/Content";
import LinkSection from "@components/Shared/LinkSection";

const index = ({ content }) => {
  const { title } = content[0];
  const about = content.filter((c) => c.title === "About")[0];

  return (
    <div>
      <div className="prose-sm prose text-center xl:py-16 lg:prose-lg max-w-none">
        <h1>{title}</h1>
      </div>
      <div>
        <LinkSection href="/about" title="About" order={0}>
          <Content key={about.title} {...about} />
        </LinkSection>
        <LinkSection href="/about" title="Projects" order={1}>
          <Content key={about.title} {...about} />
        </LinkSection>
        <LinkSection href="/about" title="Local Groups" order={2}>
          <Content key={about.title} {...about} />
        </LinkSection>
      </div>
    </div>
  );
};

export default index;
