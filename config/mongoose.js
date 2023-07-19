const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://nirub:nirub@cluster0.fmstxtx.mongodb.net/hsopital?retryWrites=true&w=majority 
`);

const db = mongoose.connection;

db.on("err", console.error.bind("Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Succefully connected to database:: MongoDB");
});

module.exports = db;
