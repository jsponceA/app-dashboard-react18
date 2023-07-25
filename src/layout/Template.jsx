import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Template = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="mb-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Template;
