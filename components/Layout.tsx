import Footer from "./footer/Footer";
import MainMenu from "./mega-menu/MainMenu";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <MainMenu />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
