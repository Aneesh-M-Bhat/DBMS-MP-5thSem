import { Sequelize } from "sequelize";

const db = new Sequelize("librarydatabase", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
