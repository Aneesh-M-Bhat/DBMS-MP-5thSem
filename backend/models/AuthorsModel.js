import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Authors = db.define(
  "Authors",
  {
    bookId: {
      type: DataTypes.STRING,
    },
    authorName: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
export default Authors;
