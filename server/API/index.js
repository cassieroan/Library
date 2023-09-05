const express = require("express");

// Create a subrouter for the '/api/' subroute
const apiRouter = express.Router();

apiRouter.get("/foo", (req, res) => {
  res.json({ hello: "WORLD!!", foo: "Bar" });
});

apiRouter.get("/bar", (req, res) => {});

module.exports = { apiRouter };
