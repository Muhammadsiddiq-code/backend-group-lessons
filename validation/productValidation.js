// models/productScheme.js
const { Schema, model } = require("mongoose");

const productScheme = new Schema({
  name: {
    type: String,
    required: [true, "Mahsulot nomi majburiy"],
    unique: true,
    trim: true,
    minlength: [2, "Mahsulot nomi kamida 2 ta harfdan iborat bo‘lishi kerak"],
    maxlength: [100, "Mahsulot nomi 100 ta belgidan oshmasligi kerak"],
  },
  price: {
    type: Number,
    required: [true, "Narx majburiy"],
    min: [0, "Narx manfiy bo‘lishi mumkin emas"],
  },
  description: {
    type: String,
    required: [true, "Tavsif majburiy"],
    trim: true,
    minlength: [10, "Tavsif kamida 10 ta belgidan iborat bo‘lishi kerak"],
    maxlength: [1000, "Tavsif 1000 ta belgidan oshmasligi kerak"],
  },
  image: {
    type: String,
    required: [true, "Rasm URL majburiy"],
    trim: true,
    validate: {
      validator: function (v) {
        return /\.(jpg|jpeg|png|webp|gif)$/i.test(v); // faqat rasm formatlari
      },
      message: (props) =>
        `${props.value} rasm URL formatida bo‘lishi kerak (.jpg, .png, .webp va h.k.)`,
    },
  },
  count: {
    type: Number,
    default: 0,
    min: [0, "Soni manfiy bo‘lishi mumkin emas"],
  },
});

const Product = model("Product", productScheme);
module.exports = { Product };
