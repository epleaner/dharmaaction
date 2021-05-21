import Footer from "@components/Shared/Layout/Footer";
import Menu from "@components/Shared/Layout/Menu";

const index = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
      <Footer />
    </div>
  );
};

export default index;
