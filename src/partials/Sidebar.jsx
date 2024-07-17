import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="min-h-[100vh] w-[15%] bg-[#ffffff] p-5">
      <div className="home flex flex-col overflow-auto ">
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
            <i class="ri-time-fill mr-5 text-xl"></i>Watch later
          </Link>
          <Link
            className="hover:bg-zinc-200 text-zinc-800 duration-300 rounded-lg p-2"
            to={"/subscription"}
          >
            <i class="ri-thumb-up-fill mr-6 text-xl"></i> Liked video
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
