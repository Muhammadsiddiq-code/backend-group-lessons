// const { Scheme, model } = require("mongoose");

// const classScheme = new Scheme({
//   teacher: {
//     type: String,
//     ball: true,
//     required: true,
//   },
//   name1: {
//     type: String,
//     required: true,
//   },
//   name2: {
//     type: String,
//     required: true,
//   },
//   name3: {
//     type: String,
//     required: true,
//   },
//   name4: {
//     type: String,
//     required: true,
//   },
//   name5: {
//     type: String,
//     required: true,
//   },
//   name6: {
//     type: String,
//     required: true,
//   },
//   name7: {
//     type: String,
//     required: true,
//   },
//   name8: {
//     type: String,
//     required: true,
//   },
//   name9: {
//     type: String,
//     required: true,
//   },
//   name10: {
//     type: String,
//     required: true,
//   },
//   name11: {
//     type: String,
//     required: true,
//   },
//   name12: {
//     type: String,
//     required: true,
//   },
//   name13: {
//     type: String,
//     required: true,
//   },
//   name14: {
//     type: String,
//     required: true,
//   },
//   name15: {
//     type: String,
//     required: true,
//   },
//   name16: {
//     type: String,
//     required: true,
//   },
// });

// const Class = model("Class", classScheme);
// module.exports = { Class };


const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  teacher: { type: String, required: true },
  name1: String,
  name2: String,
  name3: String,
  name4: String,
  name5: String,
  name6: String,
  name7: String,
  name8: String,
  name9: String,
  name10: String,
  name11: String,
  name12: String,
  name13: String,
  name14: String,
  name15: String,
  name16: String,
});

const Class = mongoose.model("Class", classSchema);

module.exports = { Class };
