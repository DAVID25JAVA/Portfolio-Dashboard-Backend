import skillModel from "../model/skill.model.js";


export const createSkill = async (req, res) => {
  try {
    const { skill, category, exp, totalProject } = req.body;

    const data = await skillModel.create({
      skill,
      category,
      exp,
      totalProject,
    });

    return res.json({
      success: true,
      message: "Skill added successfully",
      data,
    });
  } catch (error) {
    console.log("Create skill error-->", error.message);
    return res.json({ success: false, message: error.message });
  }
};


export const getSkills = async (req, res) => {
  try {
    const data = await skillModel.find();

    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.log("Get skill error-->", error.message);
    return res.json({ success: false, message: error.message });
  }
};


export const updateSkill = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await skillModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.json({
        success: false,
        message: "Skill not found",
      });
    }

    return res.json({
      success: true,
      message: "Skill updated successfully",
      data: updated,
    });
  } catch (error) {
    console.log("Update skill error-->", error.message);
    return res.json({ success: false, message: error.message });
  }
};


export const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;

    await skillModel.findByIdAndDelete(id);

    return res.json({
      success: true,
      message: "Skill deleted successfully",
    });
  } catch (error) {
    console.log("Delete skill error-->", error.message);
    return res.json({ success: false, message: error.message });
  }
};