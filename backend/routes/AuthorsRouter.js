import express from "express";
import {
  createAuthor,
  deleteAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
} from "../controllers/Authors.js";

const AuthorsRouter = express.Router();

AuthorsRouter.get("/", getAllAuthors);
AuthorsRouter.get("/:id", getAuthorById);
AuthorsRouter.post("/", createAuthor);
AuthorsRouter.patch("/:id", updateAuthor);
AuthorsRouter.delete("/:id", deleteAuthor);

export default AuthorsRouter;
