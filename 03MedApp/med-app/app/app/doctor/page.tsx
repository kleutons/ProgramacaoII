"use client";
import { useRouter } from "next/navigation";
import TitlePage from "@/src/components/TitlePage";
import DataList from "@/src/components/DataList";

//para test:
const doctors = [
  {
    _id: "68b3c719960d7ad7060527da",
    name: "Kleuton Novais",
    login: "kleuton",
    password: "$2b$10$AgN9AsJ.8TV7TzKdgWGd0uX3L39arlXJSN2h65A5jKlx8r1YUBbZC",
    email: "kleuton@gg.com",
    phone: "74 99911-2222",
    medicalSpecialty: "Optometrista",
    medicalRegistration: "213123",
    createdAt: "2025-08-31T03:52:57.102Z",
    __v: 0,
  },
  {
    _id: "a1b2c3d4e5f6g7h8i9j0",
    name: "Ana Beatriz",
    login: "anabea",
    password: "$2b$10$Xyz1234567890abcdefg",
    email: "ana.beatriz@clinic.com",
    phone: "11 98888-1234",
    medicalSpecialty: "Dermatologista",
    medicalRegistration: "123456",
    createdAt: "2025-09-01T10:15:00.000Z",
    __v: 0,
  },
  {
    _id: "z9y8x7w6v5u4t3s2r1q0",
    name: "Carlos Eduardo",
    login: "carlosedu",
    password: "$2b$10$abcdefg9876543210xyz",
    email: "carlos.edu@medcenter.com",
    phone: "21 97777-4321",
    medicalSpecialty: "Cardiologista",
    medicalRegistration: "654321",
    createdAt: "2025-09-01T14:30:00.000Z",
    __v: 0,
  },
  {
    _id: "m1n2o3p4q5r6s7t8u9v0",
    name: "Fernanda Lima",
    login: "fernandinha",
    password: "$2b$10$pass1234567890secure",
    email: "fernanda.lima@saude.com",
    phone: "31 96666-7890",
    medicalSpecialty: "Pediatra",
    medicalRegistration: "789012",
    createdAt: "2025-09-01T18:45:00.000Z",
    __v: 0,
  },
];

export default function DoctorPage() {
  const router = useRouter();

  const handleCreateDoctor = () => {
    router.push("/app/doctor/create");
  };

  return (
    <>
      <TitlePage title="Médicos" textButton="+ Cadastar Médico" onClickButton={handleCreateDoctor} />
      <DataList
        items={doctors}
        columns={[
          { key: "name", label: "Nome" },
          { key: "email", label: "Email" },
          { key: "phone", label: "Telefone" },
          { key: "medicalSpecialty", label: "Especialidade" },
        ]}
        onEdit={(id) => router.push(`/app/doctor/edit/${id}`)}
        onDelete={(id) => console.log("Excluir médico:", id)}
      />
    </>
  );
}
