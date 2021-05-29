import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { sequelize } from "./sequelize";

import { IndexRouter } from "./controllers/v0/index.router";

import bodyParser from "body-parser";
import { V0_FEED_MODELS, V0_USER_MODELS } from "./controllers/v0/model.index";

(async () => {
  dotenv.config();
  console.log('Config loaded');

  try {
    await sequelize.authenticate();
  }
  catch(error) {
    console.log(error);
  }

  try {
    await sequelize.addModels(V0_FEED_MODELS);
    await sequelize.addModels(V0_USER_MODELS);
    console.log('Modals added');
    await sequelize.sync({ force: true, logging: console.log });
    console.log("Database Connected");
  }
  catch (ex) {
    console.log(ex);
  }

  const app = express();
  // const port = process.env.PORT || 8080;
  const port = 8080;

  app.use(bodyParser.json());

  app.use(cors());

  app.use("/api/v0/", IndexRouter);

  // Root URI call
  app.get("/", async (req, res) => {
    res.send("/api/v0/");
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running ${process.env.URL}`);
    console.log(`press CTRL+C to stop server`);
  });
})();
