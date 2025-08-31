import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <div>
        <Link href="/doctor/create">Criar novo doutor</Link>
        <br />
        <Link href="/pacient/create">Criar novo Pacient</Link>
        <br />
        <Link href="/appointment/create">Criar novo Appointment</Link>
        <br />
        <Link href="/prescription/create">Criar nova Prescrição</Link>
      </div>
    </>
  );
}
