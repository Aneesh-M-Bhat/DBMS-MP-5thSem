import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const BookCopies = db.define(
  "BookCopies",
  {
    bookId: {
      type: DataTypes.STRING,
    },
    noOfCopiesAvailable: {
      type: DataTypes.INTEGER,
    },
    noOfCopiesLent: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);
export default BookCopies;
