import { Router } from "express";
import { upload } from "../config/multer.js";
import { createProject, editProject, getProject, getProjectById } from "../controller/addProject.controller.js";

export const project = Router();

project.post("/create", upload.array("images", 4), createProject);
project.get("/get", getProject)
project.get("/getById/:id", getProjectById)
project.put("/update/:id", upload.array("images", 4), editProject);