import express from "express";
import PacientService from "../services/PacientService.js";

const router = express.Router();

// GET all pacients
router.get("/pacients", async (req, res) => {
  try {
    const pacients = await PacientService.getAllPacients();
    res.status(200).json(pacients);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
});

// GET pacient by ID
router.get("/pacient/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const pacient = await PacientService.getPacient(id);
    if (!pacient) {
      return res.status(404).json({ error: "Pacient not found" });
    }
    res.status(200).json(pacient);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
});

// POST new pacient
router.post("/pacient", async (req, res) => {
  const { name, birthDate, email, phone } = req.body;
  try {
    const pacient = await PacientService.savePacient({ name, birthDate, email, phone });
    res.status(201).json(pacient);
  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        error: "Validation failed",
        messages,
      });
    }
    res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
});

// PUT update pacient
router.put("/pacient/:id", async (req, res) => {
  const { id } = req.params;
  const { name, birthDate, email, phone } = req.body;

  try {
    const updated = await PacientService.updatePacient(id, { name, birthDate, email, phone });
    if (!updated) {
      return res.status(404).json({ error: "Pacient not found" });
    }
    res.status(200).json(updated);
  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        error: "Validation failed",
        messages,
      });
    }
    res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
});

// DELETE pacient
router.delete("/pacient/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await PacientService.deletePacient(id);
    if (!deleted) {
      return res.status(404).json({ error: "Pacient not found" });
    }
    res.status(200).json({ message: "Pacient deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
});

export default router;
