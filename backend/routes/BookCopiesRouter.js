import express from "express";
import {
  createBookCopy,
  deleteBookCopy,
  getAllBookCopies,
  getBookCopyById,
  updateBookCopy,
} from "../controllers/BookCopies.js";

const BookCopiesRouter = express.Router();

BookCopiesRouter.get("/", getAllBookCopies);
BookCopiesRouter.get("/:id", getBookCopyById);
BookCopiesRouter.post("/", createBookCopy);
BookCopiesRouter.patch("/:id", updateBookCopy);
BookCopiesRouter.delete("/:id", deleteBookCopy);

export default BookCopiesRouter;
