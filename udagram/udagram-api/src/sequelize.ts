import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import { config } from "./config/config";

const options: SequelizeOptions = {
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: config.port,

  dialect: "postgres",
  // storage: ":memory:",
  logging: console.log
}
console.log(config);
export const sequelize = new Sequelize(`postgres://${config.username}:${config.password}@${config.host}:5432/${config.database}`);
// export const sequelize = new Sequelize('udagram', config.username, config.password, options);
