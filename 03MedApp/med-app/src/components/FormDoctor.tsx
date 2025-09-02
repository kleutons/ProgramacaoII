import { useRouter } from "next/navigation";
import { useState } from "react";
import FormData from "@/src/components/ui/FormData";
import InputText from "@/src/components/ui/InputText";
import ButtonPrimary from "@/src/components/ui/ButtonPrimary";
import ButtonSecondary from "@/src/components/ui/ButtonSecondary";

interface DoctorType {
  id?: string;
  name: string;
  login: string;
  password?: string;
  medicalSpecialty: string;
  medicalRegistration: number;
  email: string;
  phone: string;
}

interface FormDoctorProps {
  idDoctor?: string;
}
export default function FormDoctor({ idDoctor }: FormDoctorProps) {
  const isCreate = !idDoctor;
  const [name, setName] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [medicalSpecialty, setMedicalSpecialty] = useState<string>("");
  const [medicalRegistration, setMedicalRegistration] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const handleBack = () => {
    router.push("/app/doctor");
  };
  return (
    <FormData onSubmit={() => console.log("enviar")} errorMessage={error || undefined}>
      <InputText label="Nome" type="text" value={name} onChange={setName} required />
      <InputText label="Login" type="text" value={login} onChange={setLogin} required />
      <InputText label="Nova Senha" type="password" value={password} onChange={setPassword} />
      <InputText
        label="Especialidade Médica"
        type="text"
        value={medicalSpecialty}
        onChange={setMedicalSpecialty}
        required
      />
      <InputText
        label="Registro Médico"
        type="number"
        value={medicalRegistration}
        onChange={setMedicalRegistration}
        required
      />
      <InputText label="Email" type="email" value={email} onChange={setEmail} required />
      <InputText label="Telefone" type="text" value={phone} onChange={setPhone} required />
      <div className="flex flex-col sm:flex-row gap-6">
        <ButtonSecondary label="Cancelar" onClick={handleBack} />
        <ButtonPrimary label="Salvar" />
      </div>
    </FormData>
  );
}
