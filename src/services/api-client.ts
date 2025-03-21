import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bac63bbb6735455b830caba904a5a13c",
  },
});
