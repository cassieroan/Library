const express = require("express");
const { apiRouter } = require("./api");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Mount the subrouter under the '/api/' route
app.use("/api", apiRouter);

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
