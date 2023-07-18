const express = require("express");
const router = express.Router();
const reportController= require ('../controllers/report_controller');


router.get("/status ", reportController.repor);


module.exports = router;