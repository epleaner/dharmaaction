import ThemeToggle from "@components/Layout/Menu/ThemeToggle";

const index = () => {
  return (
    <div className="flex items-center justify-between w-full p-5 bg-gray-50 dark:bg-gray-600 dark:text-gray-200">
      <div>DANCE</div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default index;
