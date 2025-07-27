const express = require('express');
const cors = require('cors');
require("dotenv").config();
const { connect } = require('mongoose');

const app = express()

app.use(express.json());
app.use(cors());

const ConnectionToDB = async () => {
    try {
        await connect(process.env.MONGO_URL || "" )
        
        console.log("mongodb id connected");
    } catch (error) {
        console.error("mongodb connection error:", error)
    }
}

ConnectionToDB();
const { UserRouter } = require("./routes/userRoute.js")
app.use("/user", UserRouter)


const PORT = process.env.PORT || 3000
app.listen(PORT, () =>
console.log(`app is running on http://localhost:${PORT} `)
)


