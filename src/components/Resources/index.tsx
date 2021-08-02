import Resource from "@components/Resources/Resource";

const Resources = ({ page: { title, resourceTypes } }) => {
  console.log(title, resourceTypes);
  return (
    <div className="grid prose">
      <section className="">
        <h1>{title}</h1>
        {resourceTypes.items.map((r) => (
          <Resource key={r.title} {...r} />
        ))}
      </section>
    </div>
  );
};

export default Resources;
