const express = require("express");
const router = express.Router();
const doctorController= require ('../controllers/doctor_controller');

router.post("/register", doctorController.create);
router.get("/login", doctorController.login);

module.exports = router;