import Appointment from "../models/Appointment.js";

const getAllAppointments = async () => {
  return await Appointment.find();
};
const getAppointment = async (id) => {
  try {
    return await Appointment.findById(id);
  } catch (err) {
    throw new Error(err);
  }
};

const saveAppointment = async ({ date, doctorId, pacientId }) => {
  try {
    const prescription = new Appointment({ date, doctorId, pacientId });
    return await prescription.save();
  } catch (err) {
    throw new Error(err);
  }
};

const updateAppointment = async (id, { date, doctorId, pacientId }) => {
  try {
    return await Appointment.findByIdAndUpdate(id, { date, doctorId, pacientId }, { new: true });
  } catch (err) {
    throw new Error(err);
  }
};

const deleteAppointment = async (id) => {
  try {
    return await Appointment.findByIdAndUpdate(id);
  } catch (err) {
    throw new Error(err);
  }
};

const appointmentRepository = {
  getAllAppointments,
  getAppointment,
  saveAppointment,
  updateAppointment,
  deleteAppointment,
};

export default appointmentRepository;
