
// const { product } = require("../models/productScheme");

// // create product
// const CreateProduct = async (req, res) => {
//   try {
//     const { name, price, description, image, count} =
//       req.body;
//     const oldproduct = await product.findOne({ name });
//     if (oldproduct) {
//       res.status(400).json({ message: "User already exist" });
//     } else {
//       const hashedPassword = await hash(password, 10);
//       const newproduct = new product({
//         name,
//         price,
//         description,
//         image,
//         count

//       });
//       await newproduct.save();
//       res
//         .status(201)
//         .json({ message: "User created successfully", product: newproduct });
//     }
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

// // get user
// const Getproduct = async (req, res) => {
//   try {
//     const products = await product.findOne({});
//     res.json({
//       success: true,
//       massage: "barcha foydalanuchdilar ro'yhati olingan.",
//       innerData: products,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       massage:
//         "server hatosi, Foydalanuchdilar ro'yhati olishda hatolik bo'lgan.",
//     });
//   }
// };

// // const GetUserById = async (req, res) => {
// //     try {
// //         const usersId = req.params.id;
// //         const user = await User.findById(usersId)
// //         if (!user) {
// //             return res.status(404).json({ message: "User not found" });
// //         }
// //         req.json({ massage: "User not found", user })
// //     }
// //     catch (error) {
// //         console.error(error);
// //         res.status(500).json({
// //             massage: "internal server error",
// //         })
// //     };
// // }

// //----------- get User By Id ---------------
// const getProductbyId = async (req, res) => {
//   try {
//     const productId = req.params.id;
//     const product = await product.findById(productId);

//     if (!product) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.status(200).json({ message: "User found", product });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// // ----------------Update users--------------------
// const updateProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, price, description, image, count } = req.body;

//     const updatedproduct = await product.findByIdAndUpdate(
//       id,
//       { name, price, description, image, count },
//       { new: true }
//     );

//     if (!updatedproduct) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found!",
//       });
//     }

//     res.json({
//       success: true,
//       message: "User updated successfully!",
//       product: updatedproduct,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//       error: error.message,
//     });
//   }
// };
// // ----------------Delete User--------------------
// const deleteProduct = async (req, res) => {
//   try {
//     const productId = req.params.id;

//     const deletedproduct = await product.findByIdAndDelete(productId);

//     if (!deletedproduct) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.json({ message: "User deleted successfully", deletedproduct });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// module.exports = { CreateProduct, getProductbyId, updateProduct, deleteProduct, Getproduct };

// // req => request
// // res => response


























// controller/productController.js
const { Product } = require("../models/productScheme");

// Create Product
const CreateProduct = async (req, res) => {
  try {
    const { name, price, description, image, count } = req.body;
    const oldProduct = await Product.findOne({ name });
    if (oldProduct) {
      return res.status(400).json({ message: "Product already exists" });
    }

    const newProduct = new Product({
      name,
      price,
      description,
      image,
      count,
    });

    await newProduct.save();
    res.status(201).json({ message: "Product created", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all products
const Getproduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({
      success: true,
      message: "All products retrieved",
      products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get product by ID
const getProductbyId = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product found", product });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, image, count } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, description, image, count },
      { new: true }
    );

    if (!updatedProduct)
      return res.status(404).json({ message: "Product not found" });

    res.json({
      message: "Product updated successfully!",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete product
const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Product not found" });

    res.json({ message: "Product deleted successfully", deleted });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  CreateProduct,
  Getproduct,
  getProductbyId,
  updateProduct,
  deleteProduct,
};
