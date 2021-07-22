import Layout from "@components/Shared/Layout";

const index = ({ children }) => {
  return (
    <div>
      <div className="items-end hidden h-screen xl:flex md:p-10">
        <div className="grid grid-cols-1 pb-10 pl-4 font-sans text-blue-200 uppercase text-opacity-90 dark:text-opacity-75 dark:text-blue-200 text-8xl">
          <span>Dharma</span>
          <span>Action</span>
          <span>Network</span>
          <span>for Climate</span>
          <span>Engagement</span>
        </div>
      </div>
      <div className="flex items-end h-screen xl:hidden md:p-10">
        <div className="grid grid-cols-3 pb-10 pl-2 font-sans text-6xl text-blue-200 uppercase text-opacity-90 dark:text-opacity-75 dark:text-blue-200 md:text-8xl">
          <span className="col-span-3">Dharma</span>
          <span className="col-span-3 xl:col-span-1 xl:mr-10">Action</span>
          <span className="col-span-3 xl:col-span-2">Network</span>
          <span className="col-span-1 mr-0">For</span>
          <span className="col-span-2">Climate</span>
          <span className="col-span-3">Engagement</span>
        </div>
      </div>
      <Layout>{children}</Layout>
    </div>
  );
};

export default index;
