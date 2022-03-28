import express, { application } from "express";
import db from "./config/database.js";
// import allRoutes from "./routes/index.js";
import cors from "cors";
import BookRouter from "./routes/BookRouter.js";
import AuthorsRouter from "./routes/AuthorsRouter.js";
import BookLendingRouter from "./routes/BookLendingRouter.js";
import BookCopiesRouter from "./routes/BookCopiesRouter.js";
import ProfessorsRouter from "./routes/ProfessorsRouter.js";
import PublishersRouter from "./routes/PublishersRouter.js";
import StudentsRouter from "./routes/StudentsRouter.js";
import SubjectsRouter from "./routes/SubjectsRouter.js";
import UsersRouter from "./routes/UsersRouter.js";

const app = express();

try {
  await db.authenticate();
  console.log("Database connected...");
} catch (error) {
  console.error("Connection error:", error);
}

app.use(cors());
app.use(express.json());
app.use("/book", BookRouter);
app.use("/authors", AuthorsRouter);
app.use("/booklending", BookLendingRouter);
app.use("/bookcopies", BookCopiesRouter);
app.use("/professors", ProfessorsRouter);
app.use("/publishers", PublishersRouter);
app.use("/students", StudentsRouter);
app.use("/subjects", SubjectsRouter);
app.use("/users", UsersRouter);

app.listen(5000, () => console.log("Server running at port 5000"));
