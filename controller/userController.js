const { hash } = require("bcrypt");
const { User } = require("../models/userScheme");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// create user
const CreateUser = async (req, res) => {
  try {
    const { username, password, firstname, lastname, gender, address, phone } =
      req.body;
    const oldUser = await User.findOne({ username });
    if (oldUser) {
      res.status(400).json({ message: "User already exist" });
    } else {
      const hashedPassword = await hash(password, 10);
      const newUser = new User({
        username,
        password: hashedPassword,
        firstname,
        lastname,
        gender,
        address,
        phone,
      });
      await newUser.save();
      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// get user
const GetUser = async (req, res) => {
  try {
    const users = await User.findOne({});
    res.json({
      success: true,
      massage: "barcha foydalanuchdilar ro'yhati olingan.",
      innerData: users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      massage:
        "server hatosi, Foydalanuchdilar ro'yhati olishda hatolik bo'lgan.",
    });
  }
};

// const GetUserById = async (req, res) => {
//     try {
//         const usersId = req.params.id;
//         const user = await User.findById(usersId)
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }
//         req.json({ massage: "User not found", user })
//     }
//     catch (error) {
//         console.error(error);
//         res.status(500).json({
//             massage: "internal server error",
//         })
//     };
// }

//----------- get User By Id ---------------
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User found", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ----------------Update users--------------------
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, lastname, phone, address } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { username, lastname, phone, address },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    res.json({
      success: true,
      message: "User updated successfully!",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
// ----------------Delete User--------------------
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// login

const postLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    console.log(user);
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ success: false, message: "username or password is invalid" });
    }

    const token = jwt.sign({ username: user.username }, "Secret");
    return res.json({ success: true, token: token });
  } catch (error) {
    console.error(error, "error");
    return res.status(500).json({ success: false, message: " Server Error" });
  }
};




// search user
const searchUser = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || query !== "string") {
      return res.status(400).json({ message: "invalid seach required" });
    }

    const result = await User.find(
      { firstname: { $regex: query, $options: "i" } },
      { lastname: {$regex: query, $options: "i" } },
      { username: {$regex: query, $options: "i" } },

    );
  } catch (error) {
    console.error(error, "error");
    return res.status(500).json({ success: false, message: " Server Error" });
  }
};
  






module.exports = {
  CreateUser,
  getUserById,
  updateUser,
  deleteUser,
  GetUser,
  postLogin,
};

// req => request
// res => response
