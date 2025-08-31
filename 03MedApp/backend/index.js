import express from "express";
import pkg from "body-parser";
import router from "./src/router/router.js";
import "./src/database/database.js";
import cors from "cors";

const port = 3000;
const app = express();
const { json, urlencoded } = pkg;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/", router);
app.use(cors());

app.listen(port, function () {
  console.log(`Listening to port ${port}`);
});
