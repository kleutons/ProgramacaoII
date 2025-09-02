"use client";
import TitlePage from "@/src/components/TitlePage";
import DoctorSvg from "@/src/components/svg/DoctorSvg";
import UserSvg from "@/src/components/svg/UserSvg";
import FileSvg from "@/src/components/svg/FileSvg";
import CardHome from "@/src/components/ui/CardHome";

const cardsHome = [
  {
    title: "Médicos",
    iconSvg: DoctorSvg,
    url: "/app/doctor",
  },
  {
    title: "Pacientes",
    iconSvg: UserSvg,
    url: "/app/pacient",
  },
  {
    title: "Prescrições",
    iconSvg: FileSvg,
    url: "/app/prescription",
  },
];

export default function HomePage() {
  return (
    <>
      <TitlePage title="Bem Vindo" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {cardsHome.map((item, index) => (
          <CardHome key={index} title={item.title} iconSvg={item.iconSvg} url={item.url} />
        ))}
      </div>
    </>
  );
}
