
import Header from "./Headers/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import "./Layout.css";
import { Outlet } from "react-router-dom";


const Layout = (props) => {
  return (
    <div className="layout">
      <Header className="header"/>
      <Outlet   />
      <Footer className="footer"/>
    </div>
  );
};

export default Layout;