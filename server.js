import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./src/config/db.js";
import { project } from "./src/routes/addProject.routes.js";
import connectCloudinary from "./src/config/cloudinary.js";
import socialMedia from "./src/routes/socialMedia.routes.js";
import { skillRoute } from "./src/routes/skill.routes.js";
import { aboutRoute } from "./src/routes/about.routes.js";

const app = express();

await connectDB();
await connectCloudinary();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const allowOrigin = [
  "https://portfolio-dashboard-three-iota.vercel.app",
  "http://localhost:3000",
  "https://david-portfolio-o7yw.vercel.app"
];

app.use(
  cors({
    origin: allowOrigin,
    credentials: true,
  })
);

app.use("/api/project", project);
app.use("/api/social-media", socialMedia)
app.use("/api/skill", skillRoute)
app.use("/api/about", aboutRoute)

app.use((req, res) => {
  res.send("API is working greate---->");
});

const PORT = process?.env?.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
