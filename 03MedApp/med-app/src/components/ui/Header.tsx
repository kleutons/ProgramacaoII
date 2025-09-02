import Link from "next/link";
import LogoSvg from "@/src/components/svg/LogoSvg";
import LinkMenu from "@/src/components/ui/LinkMenu";

export default function Header() {
  return (
    <header className="w-full bg-[url('/imgs/bg.png')] bg-cover bg-center px-6 py-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/app/home" className="flex w-48 items-center gap-2">
          <LogoSvg />
        </Link>
        <nav>
          <ul className="flex gap-6  font-medium text-white">
            <LinkMenu url="/app/home" text="Home" />
            <LinkMenu url="/app/doctor" text="Médicos" />
            <LinkMenu url="/app/pacient" text="Pacientes" />
            <LinkMenu url="/app/prescription" text="Prescrições" />
          </ul>
        </nav>
      </div>
    </header>
  );
}
