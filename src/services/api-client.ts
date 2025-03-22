import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "64609ad445a44e61a7a864450fa5ab9c",
  },
});
