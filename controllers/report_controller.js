const Reports = require('../models/Reports');
const Doctor = require('../models/Doctor');



module.exports.getReportsByStatus = async function (req, res) {
  try {
    const { status } = req.params;

    // Find all reports with the given status
    const reports = await Reports.find({ status: status })
    .populate('patient', 'id name phone')
    .populate({
      path: 'createdByDoctor',
      select: 'name',
      model: Doctor,
    })
    .exec();

    return res.json({ reports: reports });
  } catch (err) {
    return res.json({ message: "Error in retrieving reports", error: err });
  }
};
