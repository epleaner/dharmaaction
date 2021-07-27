import Content from "@components/Shared/Content";

const About = ({ page }) => {
  return (
    <div className="prose md:prose-md lg:prose-lg max-w-none">
      {page.content.map((content) => (
        <Content key={content.title} {...content} />
      ))}
    </div>
  );
};

export default About;
