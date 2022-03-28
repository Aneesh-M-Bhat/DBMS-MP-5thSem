import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Publishers = db.define(
  "Publishers",
  {
    bookId: {
      type: DataTypes.STRING,
    },
    publisherName: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
export default Publishers;
