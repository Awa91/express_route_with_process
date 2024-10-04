import { Outlet } from "react-router-dom";
import Header from "./app/layout/header/Header";
import Footer from "./app/layout/footer/Footer";

const Layout = () => {
  const sections = [
    { title: "Services", url: "/services" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    
  ];

  const footerSections = [
    { title: "Privacy Policy", url: "/privacy-policy" },
    { title: "Terms of Services", url: "/terms-of-use" },
    { title: "About Us", url: "/about" },
    { title: "Contact Us", url: "/contact" },
  ];

  return (
    <>
      <Header  title="Appspot" sections={sections} />

      <Outlet />

      <Footer sections={footerSections} />
    </>
  );
};

export default Layout;
