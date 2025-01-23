const express = require("express");
const getUserProfileAndRepos = require("../controllers/userController.js")

const router = express.Router();

router.get("/profile/:username",getUserProfileAndRepos);


//todo==> Likes, Liked profiles



module.exports = router;