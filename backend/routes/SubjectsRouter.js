import express from "express";
import {
  createSubject,
  deleteSubject,
  getAllSubjects,
  getSubjectById,
  updateSubject,
} from "../controllers/Subjects.js";

const SubjectsRouter = express.Router();

SubjectsRouter.get("/", getAllSubjects);
SubjectsRouter.get("/:id", getSubjectById);
SubjectsRouter.post("/", createSubject);
SubjectsRouter.patch("/:id", updateSubject);
SubjectsRouter.delete("/:id", deleteSubject);

export default SubjectsRouter;
