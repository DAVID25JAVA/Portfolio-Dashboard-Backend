import mongoose from "mongoose";

const socialMediaModel = mongoose.Schema(
  {
    linkedIn: {
      type: String,
      required: [true, "Link is required"],
    },
    github: {
      type: String,
      required: [true, "Link is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    number: {
      type: Number,
      required: [true, "Number is required"],
    },
    resume: {
      type: String,
      required: [true, "Link is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
  },
  { timestamps: true }
);

const socialMedia = mongoose.model("socialMedia", socialMediaModel);
export default socialMedia;
