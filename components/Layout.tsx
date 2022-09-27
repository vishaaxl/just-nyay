import Footer from "./Footer";
import TopNav from "./home/TopNav";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <TopNav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
