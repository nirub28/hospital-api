const Reports = require('../models/Reports');


module.exports.getReportsByStatus = async function (req, res) {
  try {
    const { status } = req.params;

    // Find all reports with the given status
    const reports = await Reports.find({ status: status })
    .populate('patient', 'id name phone')
    .exec();

    return res.json({ reports: reports });
  } catch (err) {
    return res.json({ message: "Error in retrieving reports", error: err });
  }
};
