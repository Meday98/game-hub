import express from "express";
import axios from "axios";

const app = express();
const port = 3001;

app.get("/api/games", async (req, res) => {
  try {
    console.log("Incoming request to /api/games");
    const response = await axios.get("https://api.rawg.io/api/games", {
      params: {
        key: "36421212d3234f2097b35c967f793539", // Your API key
      },
    });
    console.log("RAWG API response:", response.data); // Log RAWG API response
    res.json(response.data);
  } catch (error) {
    console.error("Error in proxy server:", error); // Log the error
    res.status(500).json({ error: "Failed to fetch games" });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running on port ${port}`);
});
