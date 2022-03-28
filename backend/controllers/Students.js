import Students from "../models/StudentsModel.js";

export const getAllStudents = async (req, res) => {
  try {
    const students = await Students.findAll();
    res.json(students);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const student = await Students.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(student[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createStudent = async (req, res) => {
  try {
    await Students.create(req.body);
    res.json({
      message: "Student Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    await Students.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Student Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    await Students.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Student Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
