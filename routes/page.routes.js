const express = require("express");
const path = require("path");

const router = express.Router();
const publicPath = path.join(__dirname, "..", "public");

function sendPage(fileName) {
  return (req, res) => {
    res.sendFile(path.join(publicPath, fileName));
  };
}

router.get("/", sendPage("index.html"));
router.get("/login", sendPage("login.html"));
router.get("/signup", sendPage("signup.html"));
router.get("/dashboard", sendPage("dashboard.html"));
router.get("/services", sendPage("services.html"));
router.get("/support", sendPage("support.html"));
router.get("/settings", sendPage("settings.html"));

module.exports = router;
