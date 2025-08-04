// const express = require('express');
// const cors = require('cors');
// require("dotenv").config();
// const { connect } = require('mongoose');

// const app = express()

// app.use(express.json());
// app.use(cors());

// const ConnectionToDB = async () => {
//     try {
//         await connect(process.env.MONGO_URL || "" )
        
//         console.log("mongodb id connected");
//     } catch (error) {
//         console.error("mongodb connection error:", error)
//     }
// }

// ConnectionToDB();
// const { UserRouter } = require("./routes/userRoute.js")
// app.use("/user", UserRouter)

// const { ProductRouter } = require("./routes/productRoute.js")
// app.use("/product", ProductRouter)


// const PORT = process.env.PORT || 3000
// app.listen(PORT, () =>
// console.log(`app is running on http://localhost:${PORT} `)
// )












// index.js
const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB ulanish
const ConnectionToDB = async () => {
  try {
    await connect(process.env.MONGO_URL || "");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

ConnectionToDB();

// Routerlar
const { UserRouter } = require("./routes/userRoute");
app.use("/user", UserRouter)
const { ProductRouter } = require("./routes/productRoute");
app.use("/product", ProductRouter);
const { CarRoute } = require("./routes/carRoute");
app.use("/car", CarRoute)
const { classRoute } = require("./routes/classRoute");
app.use("/class", classRoute)



// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
