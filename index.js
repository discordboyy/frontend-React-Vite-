import express from "express";
import cors from "cors";
import { getExchangeRate } from "./api.js";

const app = express();
app.use(cors());

app.get("/api/rate", async (req, res) => {
  const { from = "USD", to = "NOK" } = req.query;
  try {
    const rate = await getExchangeRate(from, to);
    res.json(rate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch rate" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
