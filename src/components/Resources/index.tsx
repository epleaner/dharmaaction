import Content from "@components/Content";

const Resources = ({ content }) => {
  return (
    <div className="grid prose">
      <section className=" dark:text-gray-200 prose-green">
        <h1 className="dark:text-gray-200">Resources</h1>
        {content.map((c) => (
          <Content key={c.title} {...c} />
        ))}
      </section>
    </div>
  );
};

export default Resources;
