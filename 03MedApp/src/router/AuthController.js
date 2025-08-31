import express from "express";
import DoctorService from "../services/DoctorService.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/login", async (req, res) => {
  try {
    const { login, password } = req.body;
    const doctor = await DoctorService.getDoctorByLogin(login);
    if (!doctor) return res.status(401).json({ error: "Authentication failed!" });

    const passwordMatch = await bcrypt.compare(password, doctor.password);
    if (!passwordMatch) return res.status(401).json({ error: "Authentication failed!" });

    const token = jwt.sign({ doctorId: doctor._id }, "secret-key", {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Login failed!" });
  }
});

export default router;
