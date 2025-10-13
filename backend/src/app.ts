import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Roulette Rewards API is running 🚀");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));