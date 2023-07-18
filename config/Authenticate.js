const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  const token = req.headers.authorization;

  console.log('gotton token is:', token);

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, 'niranjan');
    // req.user = decoded; // Set the user object in the request for further use
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

module.exports = authenticate;