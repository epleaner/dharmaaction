import Footer from "@components/Shared/Layout/Footer";
import Menu from "@components/Shared/Layout/Menu";

const index = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-300 bg-opacity-90">
      <Menu />
      <main className="flex flex-grow px-4 pt-32 md:px-32 xl:px-64 ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default index;
