import Footer from "@components/Shared/Layout/Footer";
import Menu from "@components/Shared/Layout/Menu";

const index = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Menu />
      <main className="flex flex-grow px-4 pt-32 md:px-32 xl:px-64 bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100 dark:from-gray-600 dark:via-gray-600 dark:to-gray-700">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default index;
