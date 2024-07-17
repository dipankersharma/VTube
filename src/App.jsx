import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Shorts from "./components/Shorts";
import Subscription from "./components/Subscription";

const App = () => {
  return (
    <div className="w-full min-h-[100vh] bg-[#ffffff]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </div>
  );
};

export default App;
