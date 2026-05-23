require("dotenv").config();

const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  // decode the token and verify it here (e.g., using JWT)
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_JKEY);
    req.user = decodedToken;
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }

  next();
};

module.exports = authMiddleware;
