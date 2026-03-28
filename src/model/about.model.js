import mongoose from "mongoose";

const aboutSchema = mongoose.Schema(
  {
    image: {
      type: [String],
      required: [true, "Image is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    developerRole: {
      type: String,
      required: [true, "Role is required"],
    },
    summery: {
      type: String,
      required: [true, "Summary is required"],
    },
  },
  { timestamps: true }
);

const aboutModel = mongoose.model("about", aboutSchema);
export default aboutModel;