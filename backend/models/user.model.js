const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a new instance of mongoose schema

const userSchema = new Schema({
  // _id: Schema.Types.ObjectId, // give it a go, see if it works.
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  hourlyRate: { type: Number, required: true },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
