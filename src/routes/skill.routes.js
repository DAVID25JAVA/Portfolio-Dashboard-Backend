import { Router } from "express";
import {
  createSkill,
  getSkills,
  updateSkill,
  deleteSkill,
} from "../controller/skill.controller.js";

export const skillRoute = Router();

skillRoute.post("/create", createSkill);
skillRoute.get("/get", getSkills);
skillRoute.put("/update/:id", updateSkill);
skillRoute.delete("/delete/:id", deleteSkill);
