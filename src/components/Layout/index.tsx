import Menu from "@components/Layout/Menu";

const index = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
    </div>
  );
};

export default index;
