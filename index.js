const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const port = 8000;
const db = require('./config/mongoose');

// Use the body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// to use routes
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`The error in runng server ${err}`);
  }
  console.log(`The server is running on port: ${port}`);
});
