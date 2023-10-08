import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBOUPJ2MqgB_L_FtnrFC7icdVmuozy_uDo",
  },
});

export default request;

