import express from "express";
import authController from "./AuthController.js";
import appointmentController from "./AppointmentController.js";
import doctorController from "./DoctorController.js";
import pacientController from "./PacientController.js";
import prescriptionController from "./PrescriptionController.js";
import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", function (req, res) {
  console.log(`hi!`);
  res.status(200).json({
    message: "hi!",
  });
});

router.use("/", authController);
router.use("/", verifyToken, appointmentController);
router.use("/", verifyToken, doctorController);
router.use("/", verifyToken, pacientController);
router.use("/", verifyToken, prescriptionController);

export default router;
