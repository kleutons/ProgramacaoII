import express from "express";
import PrescriptionService from "../services/PrescriptionService.js";
import multer from "multer";
import process from "process";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./03MedApp/docs/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/prescriptions/upload/:id", upload.single("file"), async (req, res) => {
  try {
    const { id } = req.params;
    let prescription = await PrescriptionService.getPrescription(id);

    const file = "./03MedApp/docs/" + req.file.originalname;
    prescription = await PrescriptionService.updatePrescription(id, { file });

    return res.status(200).send(prescription);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.get("/prescriptions/read/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const prescription = await PrescriptionService.getPrescription(id);
    let filePath = path.resolve(process.cwd() + "/../" + prescription.file);
    res.status(200).sendFile(filePath);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.get("/prescriptions", async (req, res) => {
  try {
    const prescriptions = await PrescriptionService.getAllPrescriptions();
    res.send(prescriptions);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.get("/prescription/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const prescription = await PrescriptionService.getPrescription(id);
    res.send(prescription);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.post("/prescription", async function (req, res) {
  const { date, appointmentId, medicine, dosage, instructions } = req.body;
  try {
    const prescription = await PrescriptionService.savePrescription({
      date,
      appointmentId,
      medicine,
      dosage,
      instructions,
    });
    res.send(prescription);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.put("/prescription/:id", async (req, res) => {
  const { id } = req.params;
  const { date, appointmentId, medicine, dosage, instructions } = req.body;

  try {
    const prescription = await PrescriptionService.updatePrescription(id, {
      date,
      appointmentId,
      medicine,
      dosage,
      instructions,
    });
    res.send(prescription);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.delete("/prescription/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const prescription = await PrescriptionService.deletePrescription(id);
    res.send(prescription);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.get("/prescription/pdf/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const prescription = await PrescriptionService.getPrescription(id);
    const generatePresciption = await PrescriptionService.generatePrescitionFile(prescription);
    res.send(generatePresciption);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

export default router;
