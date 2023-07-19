const Doctor = require("../models/Doctor");
const jwt = require("jsonwebtoken");

// create a doctor profile
module.exports.create = async function (req, res) {
  if (req.body.password !== req.body.confirm_password) {
    // if password mismatch
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

// When doctor log in,create JWT token
module.exports.login = async function (req, res) {
  const { email, password } = req.body;

  try {
    const doctor = await Doctor.findOne({ email: email }).exec();

    if (!doctor || doctor.password !== password) {
      // if password mismatch
      return res.json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(          // create a token
      { email: doctor.email, _id: doctor._id },
      "niranjan"
    );

    // for expied token - token = jwt.sign({ object }, 'niranjan', { expiresIn: '1h' });
    return res.json({ message: "Login successful", doctorId: doctor._id , token: token });
  } catch (err) {
    return res.json({ message: "Error in finding email" });
  }
};
