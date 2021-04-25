const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      min: [1, "Requires at least 1 character"],
      max: [20, "20 maximum characters"],
      trim: true,
      required: [true, "required"],
    },
    lastName: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    password: { type: String, required: true },
    hourlyRate: { type: Number, trim: true, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
