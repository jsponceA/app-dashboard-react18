import Header from "../components/Header";
import Sidedar from "../components/Sidedar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Template = () => {
  return (
    <>
      <Header />
      <Sidedar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Template;
