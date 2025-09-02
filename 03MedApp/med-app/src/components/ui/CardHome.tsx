import Link from "next/link";
import type { JSX } from "react";

interface CardHomeProps {
  title: string;
  iconSvg: () => JSX.Element;
  url: string;
}
export default function CardHome({ title, iconSvg, url }: CardHomeProps) {
  return (
    <Link
      href={url}
      className="bg-[#1E252C] text-cyan-50 flex flex-col gap-2 justify-center items-center p-5 rounded-lg hover:bg-[#2A313A] transition"
    >
      <div className="w-3/4 max-w-40">{iconSvg()}</div>
      <h2 className="text-2xl">{title}</h2>
    </Link>
  );
}
