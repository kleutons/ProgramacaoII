"use client";
import { useRouter } from "next/navigation";
import TitlePage from "@/src/components/TitlePage";
import DataList from "@/src/components/DataList";

//para test:
const patients = [
  {
    _id: "68b3c9c3960d7ad7060527e0",
    name: "João da Silva Souza",
    birthDate: "1988-09-08T00:00:00.000Z",
    email: "joao@gg.com",
    phone: "88 99988-0000",
    createdAt: "2025-08-31T04:04:19.412Z",
    __v: 0,
  },
  {
    _id: "68b3c9c3960d7ad7060527e1",
    name: "Maria Fernanda",
    birthDate: "1992-04-15T00:00:00.000Z",
    email: "maria@gg.com",
    phone: "88 99988-1111",
    createdAt: "2025-08-31T05:10:00.000Z",
    __v: 0,
  },
  {
    _id: "68b3c9c3960d7ad7060527e2",
    name: "Carlos Henrique",
    birthDate: "1975-12-22T00:00:00.000Z",
    email: "carlos@gg.com",
    phone: "88 99988-2222",
    createdAt: "2025-08-31T06:20:00.000Z",
    __v: 0,
  },
];

export default function PacientPage() {
  const router = useRouter();

  const handleCreateDoctor = () => {
    router.push("/app/doctor/create");
  };

  return (
    <>
      <TitlePage
        title="Pacientes"
        textButton="+ Cadastar Paciente"
        onClickButton={handleCreateDoctor}
      />
      <DataList
        items={patients}
        columns={[
          { key: "name", label: "Nome" },
          { key: "email", label: "Email" },
          { key: "phone", label: "Telefone" },
          {
            key: "birthDate",
            label: "Nascimento",
            format: (value) => new Date(value).toLocaleDateString("pt-BR"),
          },
        ]}
        onEdit={(id) => console.log("Editar paciente:", id)}
        onDelete={(id) => console.log("Excluir paciente:", id)}
      />
    </>
  );
}
