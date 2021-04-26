const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shiftSchema = new Schema(
  {
    userId: String,
    start: { type: Date, default: Date.now },
    finish: { type: Date, default: Date.now },
    breakLength: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Shift = mongoose.model("Shift", shiftSchema);
module.exports = Shift;
