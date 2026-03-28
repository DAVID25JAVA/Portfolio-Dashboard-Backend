import mongoose from "mongoose";

const addProject = mongoose.Schema({
     name: {
        type: String,
        required:[true, "Project name is required"]
    },
     title: {
        type: String,
        required:[true, "Title is required"]
    },
    desc: {
        type: String,
       required:[true, "Description is required"]
    },
    img: {
        type: [String],
        required:[true, "Image is required"]
    },
    techStack: {
        type: [String],
        required:[true, "technology is required"]
    },
    liveLink: {
        type: String,
        required:[true, "Link is required"]
    },
    githubLink: {
        type: String,
        required:[true, "Github link is required"]
    },
},)

const addProjectModel = mongoose.model("project", addProject);
export default addProjectModel;