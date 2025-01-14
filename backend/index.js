const express = require("express");
const env = require("dotenv");
const connectDatabase = require("./config/database.js");

env.config();
const app = express();

connectDatabase();

app.listen(process.env.BACKEND_PATH,()=>{
    console.log(`listening on port ${process.env.BACKEND_PATH}`);
    
})

