const { Schema, model } = require("mongoose");

const carSchema = new Schema({
  title: {
    type: String,
    required: [true, "Mashina nomi majburiy"],
    trim: true,
    minlength: [2, "Mashina nomi kamida 2 ta belgidan iborat bo‘lishi kerak"],
    maxlength: [100, "Mashina nomi 100 ta belgidan oshmasligi kerak"],
  },
  model: {
    type: String,
    required: [true, "Model nomi majburiy"],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    maxlength: [1000, "Tavsif 1000 belgidan oshmasligi kerak"],
  },
  color: {
    type: String,
    required: [true, "Rang majburiy"],
    trim: true,
  },
  horsePower: {
    type: Number,
    required: [true, "Ot kuchi majburiy"],
    min: [20, "Ot kuchi kamida 20 bo‘lishi kerak"],
  },
  carType: {
    type: String,
    required: [true, "Mashina turi majburiy"],
    enum: {
      values: ["BMW", "Nexia 2", "Onix", "Spark", "Truck", "Mustang"],
      message: "Noto‘g‘ri mashina turi tanlandi",
    },
  },
  charging: {
    type: String,
    trim: true,
  },
  weight: {
    type: String,
    required: [true, "Og‘irlik majburiy"],
    trim: true,
  },
  gasoline: {
    type: String,
    required: [true, "Yoqilg‘i turi majburiy"],
    enum: {
      values: ["AI-80", "AI-91", "AI-95", "Diesel", "Electric"],
      message: "Yoqilg‘i turi noto‘g‘ri tanlangan",
    },
  },
  yearMachine: {
    type: String,
    required: [true, "Yil majburiy"],
    match: [/^(19|20)\d{2}$/, "Mashina yili noto‘g‘ri formatda"],
  },
  price: {
    type: Number,
    required: [true, "Narx majburiy"],
    min: [1000, "Narx 1000 dan kam bo‘lmasligi kerak"],
  },
});

const Car = model("car", carSchema);
module.exports = { Car };
