const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  const token = req.headers.authorization;


  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    console.log('test1');
    const decoded = jwt.verify(token.replace('Bearer ', ''), 'niranjan');
    req.user = decoded; // Set the user object in the request for further use
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

module.exports = authenticate;
