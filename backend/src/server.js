import express from "express";
import "dotenv/config";
import cors from "cors";

import connectDB from "./config/db.js";
import jobRoutes from "./routes/jobRoutes.route.js";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.send("Job API running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});