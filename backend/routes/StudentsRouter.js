import express from "express";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
} from "../controllers/Students.js";

const StudentsRouter = express.Router();

StudentsRouter.get("/", getAllStudents);
StudentsRouter.get("/:id", getStudentById);
StudentsRouter.post("/", createStudent);
StudentsRouter.patch("/:id", updateStudent);
StudentsRouter.delete("/:id", deleteStudent);

export default StudentsRouter;
