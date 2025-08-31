import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  date: {
    type: Date,
    require: [true, "Appointment Date is required"],
  },
  doctorId: {
    type: String,
    require: [true, "DoctorId is required"],
  },
  pacientId: {
    type: String,
    require: [true, "PacientId is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const appointment = mongoose.model("Appointment", appointmentSchema);
export default appointment;
