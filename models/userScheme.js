const { Schema,model } = require("mongoose");

const userScheme = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ""
    },
    birthday: {
        type: String
    },
    phone: {
        type: Number,
        default: ""
    },
    address: {
        type: String,
        default: ""
    },
    gender: {
        type: String,
        enum:["male", "female"], alias: "jinsi"
    }
})

const User = model("user", userScheme);
module.export = { User };