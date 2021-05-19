import Menu from "@components/Shared/Layout/Menu";

const index = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
    </div>
  );
};

export default index;
