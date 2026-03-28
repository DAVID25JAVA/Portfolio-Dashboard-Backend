import { v2 as cloudinary } from "cloudinary";
import addProjectModel from "../model/addProject.model.js";

// Create Project API---api/project/create
export const createProject = async (req, res) => {
  try {
    const {
      name,
      title,
      desc,
      img,
      techStack,
      liveLink,
      githubLink,
    } = req.body;

    //   get image
    const image = req?.files;
    // console.log("image-->", image);

    //   upload image on cloudinary
    const imageUrl = await Promise.all(
      image.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path);
        return result.secure_url;
      })
    );

    const project = await addProjectModel.create({
      name,
      title,
      desc,
      techStack,
      liveLink,
      githubLink,
      img: imageUrl,
    });
    return res.json({
      success: true,
      message: "Project added successfully",
      project:[project]
    });
  } catch (error) {
    console.log("Add project error---->", error?.message);
    return res.json({ success: false, message: error.message });
  }
};

// Get project API--api/project/get
export const getProject = async (req, res) => {
  try {
    const project = await addProjectModel.find();
    // console.log("project---->", project);
    if (!project)
      return res.json({ success: false, message: "Project not found" });
    await res.json({
      success: false,
      message: "Project Fetch successfully",
      project,
    });
  } catch (error) {
    console.log("Get project error--->", error?.message);
    return res.json({ success: false, message: "Project not found" });
  }
};

// Get Project by ID--api/project/:id
export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await addProjectModel.findById(id);
    if (!project) {
      return res.json({
        success: false,
        message: "Project not found",
      });
    }
    await res.json({
      success: true,
      message: "Project fetch successfully",
      project,
    });
  } catch (error) {
    console.log("Get project by id error-->", error?.message);
    return res.json({ success: false, message: error?.message });
  }
};

// Edit project API---api/project/update
export const editProject = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, title, desc, techkStack, liveLink, githubLink } = req.body;

    // find existing project
    const existingProject = await addProjectModel.findById(id);

    if (!existingProject) {
      return res.json({
        success: false,
        message: "Project not found",
      });
    }

    let imageUrl = existingProject.img; // default old images

    // if new images uploaded
    if (req.files && req.files.length > 0) {
      const uploadedImages = await Promise.all(
        req.files.map(async (file) => {
          const result = await cloudinary.uploader.upload(file.path);
          return result.secure_url;
        })
      );

      imageUrl = uploadedImages; // replace old images
    }

    // update project
    const updatedProject = await addProjectModel.findByIdAndUpdate(
      id,
      {
        name,
        title,
        desc,
        techkStack,
        liveLink,
        githubLink,
        img: imageUrl,
      },
      { new: true }
    );

    return res.json({
      success: true,
      message: "Project updated successfully",
      project: updatedProject,
    });
  } catch (error) {
    console.log("Edit project error-->", error?.message);
    return res.json({ success: false, message: error?.message });
  }
};
