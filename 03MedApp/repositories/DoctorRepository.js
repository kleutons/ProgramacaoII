import Doctor from "../models/Doctor.js";

const getAllDoctors = async () => {
  try {
    return await Doctor.find();
  } catch (error) {
    throw new Error(error);
  }
};

const getDoctor = async (id) => {
  try {
    return await Doctor.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

const saveDoctor = async ({
  name,
  login,
  password,
  email,
  phone,
  medicalSpecialty,
  medicalRegistration,
}) => {
  try {
    const doctor = new Doctor({
      name,
      login,
      password,
      email,
      phone,
      medicalSpecialty,
      medicalRegistration,
    });
    return await doctor.save();
  } catch (error) {
    throw new Error(error);
  }
};

const updateDoctor = async (
  id,
  { name, login, password, email, phone, medicalSpecialty, medicalRegistration }
) => {
  try {
    return await Doctor.findByIdAndUpdate(
      id,
      { name, login, password, email, phone, medicalSpecialty, medicalRegistration },
      { new: true }
    );
  } catch (error) {
    throw new Error(error);
  }
};

const deleteDoctor = async (id) => {
  try {
    return await Doctor.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

// login
const getDoctorByLogin = async (login) => {
  try {
    return await Doctor.findOne({ login: login });
  } catch (error) {
    throw new Error(error);
  }
};

const doctorRepository = {
  getAllDoctors,
  getDoctor,
  saveDoctor,
  updateDoctor,
  deleteDoctor,
  getDoctorByLogin,
};

export default doctorRepository;
