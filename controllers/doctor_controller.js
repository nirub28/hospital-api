const Doctor = require("../models/Doctor");
const jwt = require('jsonwebtoken');

module.exports.create = async function (req, res) {

  if (req.body.password !== req.body.confirm_password) {
    return res.json({ message: "Password mismatch" });
  }

  try {
    const doctor = await Doctor.findOne({ email: req.body.email }).exec();

    if (!doctor) {
      const createdDoctor = await Doctor.create(req.body);
      return res.json({ message: "Doctor signed up" });
    } else {
      return res.json({ message: "Already signed up" });
    }
  } catch (err) {
    return res.json({ message: "Error in creating user" });
  }
};

// To create JWT token
module.exports.login = async function (req, res) {
  const { email, password } = req.body;

  try {
    const doctor = await Doctor.findOne({ email: email }).exec();

    if (!doctor || doctor.password !== password) {
      return res.json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ email: doctor.email, _id: doctor._id }, 'niranjan');
    // for expied token - const token = jwt.sign({ email: doctor.email, _id: doctor._id }, 'mY$3cr3tK3y!#@123', { expiresIn: '1h' });
    return res.json({ message: "Login successful", token: token });
  } catch (err) {
    return res.json({ message: "Error in finding email" });
  }
};
