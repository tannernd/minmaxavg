const express = require("express");
const routes = require("./api");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("client/public"));
app.use("/api", routes);

app.listen("4003", () =>
  console.log(`Now Listening At: http://localhost:4003`)
);
