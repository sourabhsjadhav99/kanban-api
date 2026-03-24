const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");


const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Kanban API is running" });
});

app.use("/api/tasks", taskRoutes);

const startServer = async () => {
  if (!MONGO_URI) {
    console.error("Missing MONGO_URI. Create api/.env from api/.env.example and set MONGO_URI.");
    process.exit(1);
  }

  await connectDB(MONGO_URI);

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();
