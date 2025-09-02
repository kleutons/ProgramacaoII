"use client";
import FormDoctor from "@/src/components/FormDoctor";
import TitlePage from "@/src/components/TitlePage";
import { useRouter } from "next/navigation";

export default function DoctorCreate() {
  const router = useRouter();

  return (
    <>
      <TitlePage
        title="Cadastrar Médico"
        textButton="< Voltar"
        onClickButton={() => router.push("/app/doctor")}
      />
      <FormDoctor />
    </>
  );
}
