import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Thumbnailbox = ({ data }) => {
  const formatISODuration = (duration) => {
    const durationObj = moment.duration(duration);
    const minutes = Math.floor(durationObj.asMinutes());
    const seconds = durationObj.seconds();
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  return (
    <div className="w-full min-h-[92vh] flex flex-wrap justify-start px-1 mt-5 ml-[17%]">
      {data.map((item, index) => (
        <Link
          key={index}
          className="w-[52vh] relative rounded-lg mr-[3%] mb-[3%]"
        >
          <img
            src={item.snippet.thumbnails.medium.url}
            alt=""
            className="w-full h-[30vh] rounded-lg"
          />
          <div className="absolute flex items-center justify-center bg-zinc-700 right-2 top-[185px] p-2 text-[13px] w-[42px] h-[20px] rounded-lg text-white">
            12:17
          </div>
          <div className="flex mt-2 gap-2">
            <img
              className="bg-zinc-500 w-[40px] h-[40px] rounded-full"
              src=""
              alt=""
            />
            <div className="flex flex-col">
              <p className="font-semibold text-[16px]">{item.snippet.title}</p>
              <h6 className="text-m">{item.snippet.channelTitle}</h6>
              <div className="flex gap-1 items-center">
                <h5>
                  {item.statistics.viewCount > 1000000
                    ? (item.statistics.viewCount / 1000000).toFixed(1) +
                      "M views"
                    : (item.statistics.viewCount / 1000).toFixed(1) + "K views"}
                </h5>
                <span className="w-[4px] h-[4px] bg-zinc-500 rounded-full"></span>
                <h5>
                  {/* using moment.js date formatter to convert string to time zone
                   */}
                  {moment(item.snippet.publishedAt).startOf("hour").fromNow()}
                </h5>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Thumbnailbox;
