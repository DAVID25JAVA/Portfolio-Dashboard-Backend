import { Router } from "express";
import {
  createAbout,
  getAbout,
  updateAbout,
  deleteAbout,
} from "../controller/about.controller.js"
import { upload } from "../config/multer.js";

export const aboutRoute = Router();

aboutRoute.post("/create", upload.array("images", 4),  createAbout);
aboutRoute.get("/get", getAbout);
aboutRoute.put("/update/:id", updateAbout);
aboutRoute.delete("/delete/:id", deleteAbout);