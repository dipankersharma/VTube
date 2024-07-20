import { getVideo } from "../Reducers/AllvideoReducer";
import { removeVideo } from "../Reducers/AllvideoReducer";
import axios from "axios";

export const fetchVideo = () => async (dispatch, getstate) => {
  const apiUrl = "https://www.googleapis.com/youtube/v3/videos";
  const apiKey = "AIzaSyDHXhKJ_wC8RcffZUqcAPCWf6uIBr9EUFs"; // Replace with your YouTube API key

  // Set up parameters
  const params = {
    part: "snippet,contentDetails,statistics",
    chart: "mostPopular",
    regionCode: "In", // Adjust region as needed
    maxResults: 50, // Number of results to return
    key: apiKey,
  };

  // Make the API call
  axios
    .get(apiUrl, { params })
    .then((response) => {
      dispatch(getVideo(response.data.items));
    })
    .catch((error) => {
      console.error("Error making API call:", error);
    });
};
