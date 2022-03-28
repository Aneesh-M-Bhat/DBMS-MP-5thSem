import Professors from "../models/ProfessorsModel.js";

export const getAllProfessors = async (req, res) => {
  try {
    const professors = await Professors.findAll();
    res.json(professors);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getProfessorById = async (req, res) => {
  try {
    const professor = await Professors.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(professor[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createProfessor = async (req, res) => {
  try {
    await Professors.create(req.body);
    res.json({
      message: "Professor Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateProfessor = async (req, res) => {
  try {
    await Professors.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Professor Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteProfessor = async (req, res) => {
  try {
    await Professors.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Professor Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
