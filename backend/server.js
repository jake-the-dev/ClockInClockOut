require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// app will req, res data in a JSON format
app.use(express.json()); // bodyparser is now built into express.

// allow requests from postman / frontend.
app.use(cors());

const source = process.env.ATLAS_CONNECTION;
mongoose.connect(source, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.on("error", (error) => console.error(error));
connection.once("open", () => console.log("DB connected!"));

const userRoutes = require("./controllers/user.controller");
const shiftRoutes = require("./controllers/shift.controller");
app.use("/users", userRoutes);
app.use("/shifts", shiftRoutes);
app.get("/", (req, res) => {
  res.send("Homepage");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});

// TODO Create tests for RestAPI.
