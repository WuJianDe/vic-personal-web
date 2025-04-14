import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
const LayoutPage: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default LayoutPage;
