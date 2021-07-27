import HomeSection from "@components/LandingPage/HomeSection";

const index = ({ content }) => {
  const { title } = content[0];
  console.log(content);
  const about = content.filter((c) => c.title === "About DANCE")[0];
  const localGroups = content.filter((c) => c.title === "Local Groups")[0];

  return (
    <div>
      <div className="prose-sm prose text-center xl:py-16 lg:prose-lg max-w-none">
        <h1>{title}</h1>
      </div>
      <div>
        <HomeSection order={0} content={about} />
        <HomeSection content={localGroups} order={1} />
      </div>
    </div>
  );
};

export default index;
