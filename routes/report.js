const express = require("express");
const router = express.Router();
const reportController = require("../controllers/report_controller");
const authenticate = require("../config/Authenticate");

router.get("/:status", authenticate, reportController.getReportsByStatus);

module.exports = router;
