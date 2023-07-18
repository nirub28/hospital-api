const express = require("express");
const router = express.Router();


router.get("/");
router.use("/doctors", require("./doctor"));
router.use("/patients", require("./patient"));
router.use("/reports", require("./report"));

module.exports = router;