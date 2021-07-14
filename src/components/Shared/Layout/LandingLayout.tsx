import Layout from "@components/Shared/Layout";

const index = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col justify-center h-screen p-2 font-sans text-6xl text-blue-200 uppercase text-opacity-90 dark:text-opacity-75 dark:text-blue-200 md:p-10 md:text-8xl bg-hero">
        <p className="lg:mb-10">Dharma</p>
        <p className="lg:mb-10">Action Network</p>
        <p className="lg:mb-10">for Climate Engagement</p>
      </div>
      <Layout>{children}</Layout>
    </div>
  );
};

export default index;
