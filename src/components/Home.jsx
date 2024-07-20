import React, { useEffect } from "react";
import Navbar from "../partials/Navbar";
import Sidebar from "../partials/Sidebar";
import { fetchVideo } from "../Stores/Actions/AllvideoAction";
import { useDispatch, useSelector } from "react-redux";
import Thumbnailbox from "../partials/Thumbnail";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideo());
  }, []);
  const { information } = useSelector((state) => state.video);
  console.log(information);
  return (
    <>
      <Navbar />
      <div className=" h-[92vh] w-full flex  overflow-x-hidden overflow-y-auto">
        <Sidebar />
        <Thumbnailbox data={information} />
      </div>
    </>
  );
};

export default Home;
