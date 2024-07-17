import React, { useState } from "react";

const Navbar = () => {
  const { querry, setquerry } = useState("");

  return (
    <div className="w-full sticky bg-[#ffffff] top-0 left-0 h-[8vh]  flex p-3 items-center">
      <div className="logo flex p-1">
        <i class="ri-align-justify text-xl mr-8 ml-3"></i>
        <div className="title flex">
          <i class="ri-youtube-fill text-3xl mr-1"></i>
          <h1 className="text-2xl font-bold ">VTube</h1>
        </div>
      </div>

      <div className="search flex ml-[15rem] items-center w-full mt-2">
        <div className="searchbox flex items-center w-[57%] ">
          <input
            onChange={(e) => setquerry(e.target.value)}
            value={querry}
            className="py-2 px-4 text-lg w-[95%] rounded-l-full border-[1px] border-zinc-400 outline-none"
            type="text"
            placeholder="Search"
          />
          <i class="ri-search-line text-2xl h-[46px] w-[58px]  bg-zinc-100 rounded-r-full flex items-center justify-center border-[1px] border-zinc-400 rounded-r-full cursor-pointer"></i>
        </div>
        <i class="ri-mic-fill h-[44px] w-[44px] bg-zinc-100 rounded-full flex items-center justify-center text-xl ml-5"></i>
        <div className="other flex items-center ml-[18vw] gap-6 text-[22px]">
          <i class="ri-video-add-line"></i>
          <i class="ri-notification-4-line"></i>
          <i class="ri-user-fill h-[40px] w-[40px] bg-zinc-300 rounded-full flex items-center justify-center"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
