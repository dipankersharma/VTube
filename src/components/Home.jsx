import React from "react";
import Navbar from "../partials/Navbar";
import Sidebar from "../partials/Sidebar";

const Home = () => {
  return (
    <div className="w-full min-[100vw] ">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Home;
