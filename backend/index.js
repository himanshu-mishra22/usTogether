const express = require("express");
const env = require("dotenv");

env.config();
const app = express();

app.listen(process.env.BACKEND_PATH,()=>{
    console.log(`listening on port ${process.env.BACKEND_PATH}`);
    
})

