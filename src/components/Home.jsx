import React from "react";
import Navbar from "../partials/Navbar";
import Sidebar from "../partials/Sidebar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className=" h-[92vh] w-full flex ">
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
