import socialMedia from "../model/socialMedia.model.js";

export const createSocial = async (req, res) => {
  try {
    const data = await socialMedia.create(req.body);

    return res.json({
      success: true,
      message: "Social media added successfully",
      data,
    });
  } catch (error) {
    console.log("Create error-->", error.message);
    return res.json({ success: false, message: error.message });
  }
};

export const getSocial = async (req, res) => {
  try {
    const data = await socialMedia.find();

    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.log("Get error-->", error.message);
    return res.json({ success: false, message: error.message });
  }
};


export const updateSocial = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedData = await socialMedia.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedData) {
      return res.json({
        success: false,
        message: "Data not found",
      });
    }

    return res.json({
      success: true,
      message: "Updated successfully",
      data: updatedData,
    });
  } catch (error) {
    console.log("Update error-->", error.message);
    return res.json({ success: false, message: error.message });
  }
};