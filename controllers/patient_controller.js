const Patient = require('../models/Patient');
const Reports = require('../models/Reports');

module.exports.register = async function (req, res) {
  try {
    const { phone, name } = req.body;

    // Check if the patient already exists
    let patient = await Patient.findOne({ phone: phone }).exec();

    if (patient) {
      // Patient already exists, return patient info
      return res.json({ message: "Patient already registered", patient: patient });
    }

    // Create a new patient
    patient = await Patient.create({ phone: phone, name: name });

    return res.json({ message: "Patient registered successfully", patient: patient });
  } catch (err) {
    return res.json({ message: "Error in registering patient", error: err });
  }
};


module.exports.createReport = async function (req, res) {
  try {
    const { id } = req.params;
    const { createdByDoctor, status } = req.body;

    // Find the patient by ID
    let patient = await Patient.findById(id).exec();

    if (!patient) {
      return res.json({ message: "Patient not found" });
    }

    // Create a new report for the patient
    const report = await Reports.create({ createdByDoctor: createdByDoctor, status: status, patient: patient._id  });
    patient.reports.push(report);
    await patient.save();

    return res.json({ message: "Report created successfully", report: report });
  } catch (err) {
    return res.json({ message: "Error in creating report", error: err });
  }
};

module.exports.getAllReports = async function (req, res) {
  try {
    const { id } = req.params;

    // Find the patient by ID
    let patient = await Patient.findById(id).populate('reports').exec();

    if (!patient) {
      return res.json({ message: "Patient not found" });
    }

    // Sort the reports by date in ascending order
    const sortedReports = patient.reports.sort((a, b) => a.date - b.date);

    return res.json({ reports: sortedReports });
  } catch (err) {
    return res.json({ message: "Error in retrieving reports", error: err });
  }
};
