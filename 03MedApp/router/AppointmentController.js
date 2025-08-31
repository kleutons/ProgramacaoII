import { express } from "express";
import AppointmentService from "../services/AppointmentService";

let router = express.Router();

router.get("/appointments", async (req, res) => {
  try {
    const appointments = await AppointmentService.getAllAppointments();
    res.send(appointments);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/appointment/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const appointment = await AppointmentService.getAppointment(id);
    res.send(appointment);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.post("/appointment", async (req, res) => {
  const { date, doctorId, pacientId } = req.body;
  try {
    const appointment = await AppointmentService.saveAppointment({ date, doctorId, pacientId });
    res.send(appointment);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.put("/appointment/:id", async (req, res) => {
  const { id } = req.params;
  const { date, doctorId, pacientId } = req.body;
  try {
    const appointment = await AppointmentService.updateAppointment(id, {
      date,
      doctorId,
      pacientId,
    });
    res.send(appointment);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.delete("/appointment/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await AppointmentService.deleteAppointment(id);
    res.send(appointment);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

export default router;
