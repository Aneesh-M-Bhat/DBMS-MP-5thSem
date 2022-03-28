import express from "express";
import {
  createBookLending,
  deleteBookLending,
  getAllBookLendings,
  getBookLendingById,
  updateBookLending,
} from "../controllers/BookLending.js";

const BookLendingRouter = express.Router();

BookLendingRouter.get("/", getAllBookLendings);
BookLendingRouter.get("/:id", getBookLendingById);
BookLendingRouter.post("/", createBookLending);
BookLendingRouter.patch("/:id", updateBookLending);
BookLendingRouter.delete("/:id", deleteBookLending);

export default BookLendingRouter;
