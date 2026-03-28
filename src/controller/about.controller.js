import aboutModel from "../model/about.model.js";

export const createAbout = async (req, res) => {
  try {
    const { image, name, developerRole, summery } = req.body;

    const data = await aboutModel.create({
      image,
      name,
      developerRole,
      summery,
    });

    return res.json({
      success: true,
      message: "About added successfully",
      data,
    });
  } catch (error) {
    console.log("Create about error-->", error.message);
    return res.json({ success: false, message: error.message });
  }
};

export const getAbout = async (req, res) => {
  try {
    const data = await aboutModel.find();

    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.log("Get about error-->", error.message);
    return res.json({ success: false, message: error.message });
  }
};

export const updateAbout = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await aboutModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.json({
        success: false,
        message: "Data not found",
      });
    }

    return res.json({
      success: true,
      message: "About updated successfully",
      data: updated,
    });
  } catch (error) {
    console.log("Update about error-->", error.message);
    return res.json({ success: false, message: error.message });
  }
};

export const deleteAbout = async (req, res) => {
  try {
    const { id } = req.params;

    await aboutModel.findByIdAndDelete(id);

    return res.json({
      success: true,
      message: "About deleted successfully",
    });
  } catch (error) {
    console.log("Delete about error-->", error.message);
    return res.json({ success: false, message: error.message });
  }
};