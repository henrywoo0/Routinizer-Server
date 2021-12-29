import "dotenv/config";
import * as morgan from "morgan";
import * as express from "express";
import * as cors from "cors";
import { createConnection } from "typeorm";
import connectOptions from "../ormconfig";
import api from "./api";
import * as schedule from "node-schedule";
import checkProof from "./api/v1/proof/proof.ctrl/checkProof";

const app = express();
const logger = morgan("dev");
const bodyParser = require("body-parser");
const job = schedule.scheduleJob("0 0 0 * * *", checkProof);

app.use(cors());
app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", api);
app.use("/uploads", express.static("uploads"));

createConnection(connectOptions)
  .then((connection) => {
    console.log("✅ Connected to DB");
    app.listen(process.env.PORT, () => {
      console.log(
        `✅ Server listening on port http://localhost:${process.env.PORT} 🚀`
      );
    });
  })
  .catch((error) => {
    console.log("❌ DB Error", error);
  });
