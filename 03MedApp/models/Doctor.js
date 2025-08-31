import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  doctorId: {
    type: String,
    require: [true, "DoctorId is required"],
  },
  name: {
    type: String,
    require: [true, "Doctor name is required"],
  },
  login: {
    type: String,
    require: [true, "Login is required"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Password name is required"],
  },
  email: {
    type: String,
    require: [true, "Email contact is required"],
    unique: true,
  },
  phone: {
    type: String,
    require: [true, "Phone number contact is required"],
  },
  medicalSpecialty: {
    type: String,
    require: [true, "Mediacal Specialty name is required"],
  },
  medicalRegistration: {
    type: String,
    require: [true, "Mediacal Registration name is required"],
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const doctor = mongoose.model("Doctor", doctorSchema);
export default doctor;
