/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/header/Navbar";

import Footer from "@/components/Layout/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
