import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5b307ca553204b41829dbc485d3c8671",
  },
});
