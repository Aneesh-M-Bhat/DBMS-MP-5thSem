import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Subjects = db.define(
  "Subjects",
  {
    subjectCode: {
      type: DataTypes.STRING,
    },
    subjectName: {
      type: DataTypes.STRING,
    },
    bookId: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
export default Subjects;
