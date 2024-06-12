import Seo from "../../Seo/Seo";

const MainLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Seo />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
