import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [showmore, setshowmore] = useState();
  const toggleShowmore = () => {
    setshowmore(!showmore);
  };
  const data = [
    { name: "Diapnker kumar", img: "favicon-32x32.png" },
    { name: "Diapnker kumar", img: "favicon-32x32.png" },
    { name: "Diapnker kumar", img: "favicon-32x32.png" },
    { name: "Diapnker kumar", img: "favicon-32x32.png" },
    { name: "Diapnker kumar", img: "favicon-32x32.png" },
    { name: "Diapnker kumar", img: "favicon-32x32.png" },
    { name: "Diapnker kumar", img: "favicon-32x32.png" },
    { name: "Diapnker kumar", img: "favicon-32x32.png" },
    { name: "Diapnker kumar", img: "favicon-32x32.png" },
  ];

  const newdata = showmore ? data : data.slice(0, 4);
  return (
    <div className="h-[92vh] w-[15%] bg-[#ffffff]  overflow-y-auto p-5 flex flex-col fixed left-0">
      {/* home */}
      <nav className="flex flex-col text-zinc-800 mb-2">
        <Link
          className=" bg-zinc-200 hover:bg-zinc-300 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/"}
        >
          <i class="ri-home-5-fill mr-6 text-xl"></i>Home
        </Link>
        <Link
          className="hover:bg-zinc-200 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/shorts"}
        >
          <i class="ri-file-video-fill mr-6 text-xl"></i>Shorts
        </Link>
        <Link
          className="hover:bg-zinc-200 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/subscription"}
        >
          <i class="ri-slideshow-4-fill mr-6 text-xl"></i>Subcriptions
        </Link>
      </nav>
      <hr />
      {/* explore */}
      <nav className="flex flex-col text-zinc-800 mb-2">
        <h1 className="text-zinc 900 font-semibold text-lg mt-3 mb-3">
          Explore
        </h1>
        <Link
          className=" hover:bg-zinc-300 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/"}
        >
          <i className="mr-1 ri-fire-fill mr-6 text-xl"></i>Trending
        </Link>
        <Link
          className="hover:bg-zinc-200 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/shorts"}
        >
          <i class="ri-shopping-bag-fill mr-6 text-xl"></i>Shoping
        </Link>
        <Link
          className="hover:bg-zinc-200 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/subscription"}
        >
          <i class="ri-music-2-fill mr-6 text-xl"></i>Music
        </Link>
        <Link
          className="hover:bg-zinc-200 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/subscription"}
        >
          <i class="ri-gamepad-fill mr-6 text-xl"></i>Gaming
        </Link>
        <Link
          className="hover:bg-zinc-200 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/subscription"}
        >
          <i class="ri-book-3-fill mr-6 text-xl"></i>Courses
        </Link>
        <Link
          className="hover:bg-zinc-200 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/subscription"}
        >
          <i class="ri-live-fill mr-6 text-xl"></i>Live
        </Link>
        <Link
          className="hover:bg-zinc-200 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/subscription"}
        >
          <i class="ri-movie-2-fill mr-6 text-xl"></i>Movies
        </Link>
        <Link
          className="hover:bg-zinc-200 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/subscription"}
        >
          <i class="ri-trophy-fill mr-6 text-xl"></i>Sports
        </Link>
        <Link
          className="hover:bg-zinc-200 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/subscription"}
        >
          <i class="ri-news-fill mr-6 text-xl"></i>News
        </Link>
        <Link
          className="hover:bg-zinc-200 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/subscription"}
        >
          <i class="ri-netease-cloud-music-fill mr-6 text-xl"></i>Podcast
        </Link>
      </nav>
      <hr />
      {/* Account details */}
      <nav className="flex flex-col text-zinc-800 mb-2">
        <h1 className="text-zinc 900 font-semibold text-lg mt-3 mb-3 ">
          You<i class="ri-arrow-right-s-line ml-2 cursor-pointer"></i>
        </h1>
        <Link
          className=" hover:bg-zinc-300 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/"}
        >
          <i class="ri-contacts-fill text-xl mr-6 "></i>Your Account
        </Link>
        <Link
          className="hover:bg-zinc-200 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/shorts"}
        >
          <i class="ri-history-line mr-6 text-xl"></i>History
        </Link>
        <Link
          className="hover:bg-zinc-200 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/subscription"}
        >
          <i class="ri-play-list-2-fill text-xl mr-6"></i>Playlist
        </Link>
        <Link
          className="hover:bg-zinc-200 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/subscription"}
        >
          <i class="ri-gamepad-fill mr-6 text-xl"></i>Your videos
        </Link>
        <Link
          className="hover:bg-zinc-200 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/subscription"}
        >
          <i class="ri-time-fill mr-6 text-xl"></i>Watch later
        </Link>
        <Link
          className="hover:bg-zinc-200 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/subscription"}
        >
          <i class="ri-thumb-up-fill mr-6 text-xl"></i> Liked video
        </Link>
      </nav>
      <hr />
      {/* subscription */}
      <nav className="flex flex-col text-zinc-800 mb-2">
        <h1 className="text-zinc 900 font-semibold text-lg mt-3 mb-3 ">
          Subscriptions
        </h1>
        {newdata.map((item, index) => (
          <Link
            key={index}
            className=" hover:bg-zinc-300 text-zinc-800 duration-300 rounded-lg p-2 flex items-center  gap-5 "
            to={"/"}
          >
            <img
              className="h-[30px] w-[30px] rounded-full object-cover"
              src={item.img}
              alt=""
            />
            <h1 className="text-sm">{item.name}</h1>
          </Link>
        ))}
        {data.length > 5 && (
          <Link onClick={toggleShowmore} className="  p-2" to={"/"}>
            {showmore ? (
              <i className="ri-arrow-down-wide-fill ml-[75px] text-2xl"></i>
            ) : (
              <i class="ri-arrow-up-wide-fill ml-[75px] text-2xl"></i>
            )}
          </Link>
        )}
      </nav>
      <hr />
      <nav className="flex flex-col text-zinc-800 mb-2 mt-2">
        <Link
          className=" hover:bg-zinc-300 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/"}
        >
          <i class="ri-settings-5-fill mr-6 text-xl"></i>Setting
        </Link>
        <Link
          className="hover:bg-zinc-200 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/shorts"}
        >
          <i class="ri-flag-fill mr-6 text-xl"></i>Report History
        </Link>
        <Link
          className="hover:bg-zinc-200 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/subscription"}
        >
          <i class="ri-question-fill mr-6 text-xl"></i>Help
        </Link>
        <Link
          className="hover:bg-zinc-200 text-zinc-800 duration-300 rounded-lg p-2"
          to={"/subscription"}
        >
          <i class="ri-feedback-fill mr-6 text-xl"></i>Send feedback
        </Link>
      </nav>

      <h5 className="text-sm">
        <i class="ri-copyright-line ml-2 font-light"></i> 2024 VTube LLC
      </h5>
    </div>
  );
};

export default Sidebar;
