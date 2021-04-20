const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json()); // bodyparser is now built into express.

const source = process.env.ATLAS_CONNECTION;

mongoose.connect(source, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// listener for confirmation of database connection
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("DB connected!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Successfully served on port: ${PORT}.`);
});
