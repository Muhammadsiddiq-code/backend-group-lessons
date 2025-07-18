const { hash } = require("bcrypt");

const { User } = require("../models/userScheme");


const Create = async (req, res) => {
    try { 
        const { username, password, firstname, lastname, gender, address, phone} = req.body;
        const oldUser = await User.findOne({ username });
        if (oldUser) {
            res.status(400).json({ message: "User already exist" });
        } else {
            const hashedPassword = await hash(password, 10);
            const newUser = new User({
                username,
                password,
                firstname,
                lastname,
                gender,
                address,
                phone,
            });
            await newUser.save();
            res.status(201).json({ message: "User created successfully", user: newUser });
        }
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {CreateUser};

// req => request
// res => response