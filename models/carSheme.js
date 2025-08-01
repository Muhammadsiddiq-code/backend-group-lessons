const { Schema, model } = require("mongoose");

const carSchema = new Schema({
  title: { type: String, require: true },
  model: { type: String, require: true },
  description: { type: String },
  color: { type: String, require: true },
  horsePower: { type: Number, require: true },
  carType: { type: String, require: true },
  charging: { type: String },
  weight: { type: String, require: true },
  gasoline: { type: String, require: true },
  yearMachine: { type: String, require: true },
  price: { type: Number, require: true },
});

const Car = model("car", carSchema);
module.exports = { Car };
