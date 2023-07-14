import Sequelize from "sequelize";

const sequelize = new Sequelize("db_fruver", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export { sequelize };
