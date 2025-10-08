import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import React from "react";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-290px)] bg-gray-100 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
