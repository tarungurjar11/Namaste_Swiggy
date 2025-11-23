
import Header from "./Headers/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  return (
    <div className="layout">
      <Header className="header"/>
      <Body className="body"/>
      <Footer className="footer"/>
    </div>
  );
};

export default Layout;