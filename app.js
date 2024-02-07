require("dotenv").config();

const express = require("express");
const router = require("./router/routes");

const port = process.env.APP_PORT;

const app = express();

app.use(express.json());

app.use(router);
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});