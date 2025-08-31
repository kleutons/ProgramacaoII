import jwt from "jsonwebtoken";

export default function verifyToken(req, res, next) {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ error: "Access Denied!" });

  try {
    const decoded = jwt.verify(token, "secret-key");
    req.doctorId = decoded.doctorId;
    next();
  } catch (err) {
    console.error("Token verification failed:", err.message);
    res.status(401).json({ error: "Invalid Token!" });
  }
}
