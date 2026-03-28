import { Router } from "express";
import {
  createAbout,
  getAbout,
  updateAbout,
  deleteAbout,
} from  "../controller/about.controller.js"

export const aboutRoute = Router();

aboutRoute.post("/create", createAbout);
aboutRoute.get("/get", getAbout);
aboutRoute.put("/update/:id", updateAbout);
aboutRoute.delete("/delete/:id", deleteAbout);