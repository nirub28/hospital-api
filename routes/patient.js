const express = require("express");
const router = express.Router();
const patientController= require ('../controllers/patient_controller');


router.post("/register", patientController.pati);
router.post("/:id/create_report", patientController.pati);
router.get("/:id/all_reports", patientController.pati);


module.exports = router;