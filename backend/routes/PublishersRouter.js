import express from "express";
import {
  createPublisher,
  deletePublisher,
  getAllPublishers,
  getPublisherById,
  updatePublisher,
} from "../controllers/Publishers.js";

const PublishersRouter = express.Router();

PublishersRouter.get("/", getAllPublishers);
PublishersRouter.get("/:id", getPublisherById);
PublishersRouter.post("/", createPublisher);
PublishersRouter.patch("/:id", updatePublisher);
PublishersRouter.delete("/:id", deletePublisher);

export default PublishersRouter;
