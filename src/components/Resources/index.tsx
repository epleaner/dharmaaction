import ResourceCard from "@components/Resources/ResourceCard";

const Resources = ({ page: { title, resourceTypes } }) => {
  console.log(title, resourceTypes);
  return (
    <div className="w-full">
      <div className="mb-10 prose">
        <h1>{title}</h1>
      </div>
      <div className="grid w-full grid-cols-1 gap-10 mb-10 md:grid-cols-2">
        {resourceTypes.items.map((r) => (
          <ResourceCard key={r.title} {...r} />
        ))}
      </div>
    </div>
  );
};

export default Resources;
