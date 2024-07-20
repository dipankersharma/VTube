import axios from "axios";

const instance = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  headers: {
    Authorization: "Bearer AIzaSyDHXhKJ_wC8RcffZUqcAPCWf6uIBr9EUFs",
    Accept: "application/json",
  },
});

export default instance;
