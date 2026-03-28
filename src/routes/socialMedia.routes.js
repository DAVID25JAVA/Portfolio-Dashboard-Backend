import { Router } from "express";
import {
  createSocial,
  getSocial,
  updateSocial,
} from "../controller/socialMedia.controller.js";

const socialMedia = Router();

socialMedia.post("/create", createSocial);
socialMedia.get("/get", getSocial);
socialMedia.put("/update/:id", updateSocial);

export default socialMedia;
