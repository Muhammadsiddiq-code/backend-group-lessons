const { Scheme, model } = require("mongoose");

const classScheme = new Scheme({
    teacher: {
        type: String,
        ball: true,
        required: true,
    },
    name1: {
        type: String,
        required: true
    },
    name2: {
        type: String,
        required: true
    },
    name3: {
        type: String,
        required: true
    },
    name4: {
        type: String,
        required: true
    },
    name5: {
        type: String,
        required: true
    },
    name6: {
        type: String,
        required: true
    },
    name7: {
        type: String,
        required: true
    },
    name8: {
        type: String,
        required: true
    },
    name9: {
        type: String,
        required: true
    },
    name10: {
        type: String,
        required: true
    },
    name11: {
        type: String,
        required: true
    },
    name12: {
        type: String,
        required: true
    },
    name13: {
        type: String,
        required: true
    },
    name14: {
        type: String,
        required: true
    },
    name15: {
        type: String,
        required: true
    },
    name16: {
        type: String,
        required: true
    },
})

const Class = model("Class", classSchema)
module.exports = { Class }