const express = require("express");
const env = require("dotenv");
const connectDatabase = require("./config/database.js");
const userRoutes = require("./Routes/userRoutes.js");

env.config();
const app = express();

connectDatabase();

app.use("/api/users", userRoutes);



app.listen(process.env.BACKEND_PATH || 3000, ()=>{
    console.log(`listening on port ${process.env.BACKEND_PATH}`);
    
})

