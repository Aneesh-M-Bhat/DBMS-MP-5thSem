import express from "express";
import {
  createProfessor,
  deleteProfessor,
  getAllProfessors,
  getProfessorById,
  updateProfessor,
} from "../controllers/Professors.js";

const ProfessorsRouter = express.Router();

ProfessorsRouter.get("/", getAllProfessors);
ProfessorsRouter.get("/:id", getProfessorById);
ProfessorsRouter.post("/", createProfessor);
ProfessorsRouter.patch("/:id", updateProfessor);
ProfessorsRouter.delete("/:id", deleteProfessor);

export default ProfessorsRouter;
