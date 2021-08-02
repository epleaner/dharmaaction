import Content from "@components/Shared/Content";

const Resource = ({ title, body }) => {
  const {
    links: {
      entries: { block },
    },
  } = body;

  console.log(title, block);
  return (
    <div>
      <h3>{title}</h3>
      {block.map((b) => (
        <Content key={b.title} {...b} hideTitle />
      ))}
    </div>
  );
};

export default Resource;
