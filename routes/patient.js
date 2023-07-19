const express = require("express");
const router = express.Router();
const patientController= require ('../controllers/patient_controller');
const authenticate = require('../config/Authenticate');



router.post("/register", authenticate , patientController.register);
router.post("/create_report/:id", authenticate, patientController.createReport);
router.get("/all_reports/:id", authenticate, patientController.getAllReports);


module.exports = router;