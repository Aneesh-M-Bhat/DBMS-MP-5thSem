import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/Users.js";

const UsersRouter = express.Router();

UsersRouter.get("/", getAllUsers);
UsersRouter.get("/:id", getUserById);
UsersRouter.post("/", createUser);
UsersRouter.patch("/:id", updateUser);
UsersRouter.delete("/:id", deleteUser);

export default UsersRouter;
