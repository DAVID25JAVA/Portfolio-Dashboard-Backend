import mongoose from "mongoose";

const skillSchema = mongoose.Schema(
  {
    skill: {
      type: [String],
      required: [true, "Skill is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    exp: {
      type: Number,
      required: [true, "Experience is required"],
    },
    totalProject: {
      type: Number,
      required: [true, "Total project is required"],
    },
  },
  { timestamps: true }
);

const skillModel = mongoose.model("skill", skillSchema);
export default skillModel;