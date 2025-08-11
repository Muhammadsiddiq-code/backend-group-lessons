// const { Schema, model } = require("mongoose");
// import { product } = require("./productScheme");

// const userScheme = new Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   firstname: {
//     type: String,
//     default: "",
//   },
//   lastname: {
//     type: String,
//     default: "",
//   },
//   birthday: {
//     type: String,
//   },
//   phone: {
//     type: Number,
//     default: "",
//   },
//   address: {
//     type: String,
//     default: "",
//   },
//   gender: {
//     type: String,
//     enum: ["male", "female"],
//     alias: "jinsi",
//   },

//   product_id: {
//     type: Schema.Types.ObjectId,
//     ref: product
//   }

//   // age: {
//   //   type: Number,
//   //   default: 0,
//   // },

// });

// const User = model("user", userScheme);
// module.exports = { User };




















// Mongoose import
const { Schema, model } = require("mongoose");

// Product modelini import qilish
const { Product } = require("./productScheme");
// const product = model("/product", productScheme);

const userScheme = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    default: "",
  },
  lastname: {
    type: String,
    default: "",
  },
  birthday: {
    type: String,
    default: "",
  },
  phone: {
    type: Number, // Telefon raqamini string sifatida saqlash qulay
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    alias: "jinsi",
  },
  product_id: {
    type: Schema.Types.ObjectId,
    ref: Product, // Model nomini avtomatik olish
  },
  // age: {
  //   type: Number,
  //   default: 0,
  // },
});

const User = model("User", userScheme);

module.exports = { User };
