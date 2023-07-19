const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    createdByDoctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    status: {
      type: String,
      enum: [
        "Negative",
        "Travelled-Quarantine",
        "Symptoms-Quarantine",
        "Positive-Admit",
      ],
      required: true,
    },
    date: {
      type: String,
      required: true,
      default: new Date().toLocaleDateString(),  // to take just the date and exclude time
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Reports = mongoose.model("Reports", reportSchema);
module.exports = Reports;
