import Footer from "@components/Shared/Layout/Footer";
import Menu from "@components/Shared/Layout/Menu";

const index = ({ children }) => {
  return (
    <div>
      <Menu />
      <main className="flex justify-center min-h-screen px-4 py-24 bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100 dark:from-gray-600 dark:via-gray-600 dark:to-gray-700">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default index;
